package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /bookingmembers
func CreateBookingMember(c *gin.Context) {
	var bookingmember entity.BookingMember
	var booking entity.Booking
	var member entity.Member

	// bind เข้าตัวแปร bookingmember
	if err := c.ShouldBindJSON(&bookingmember); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search Booking with id
	if tx := entity.DB().Where("id = ?", bookingmember.BookingID).First(&booking); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Booking not found"})
		return
	}
	// Search Member with id
	if tx := entity.DB().Where("id = ?", bookingmember.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Member not found"})
		return
	}

	// Create ReviewPackage
	bk := entity.BookingMember{
		Booking: booking,
		Member:  member,
	}

	// Save
	if err := entity.DB().Create(&bk).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": bk})
}

// GET /bookingmembers/:id
func GetBookingMember(c *gin.Context) {
	var bookingmember entity.BookingMember
	id := c.Param("id")
	if err := entity.DB().Preload("Booking").Preload("Member").Raw("SELECT * FROM booking_members WHERE id = ?", id).Find(&bookingmember).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": bookingmember})
}

// GET /bookingmembers
func ListBookingMember(c *gin.Context) {
	var bookingmember []entity.BookingMember
	if err := entity.DB().Preload("Booking").Preload("Member").Raw("SELECT * FROM booking_members").Find(&bookingmember).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": bookingmember})
}

// DELETE /bookingmembers/:id
func DeleteBookingMember(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM booking_members WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "BookingMember not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}
