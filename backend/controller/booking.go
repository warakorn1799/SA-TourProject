package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /bookings
func CreateBooking(c *gin.Context) {
	var booking entity.Booking
	var packagess entity.Package
	var room entity.RoomType
	var member entity.Member

	// bind เข้าตัวแปร booking
	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Search package with id
	if tx := entity.DB().Where("id = ?", booking.PackageID).First(&packagess); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Package not found"})
		return
	}
	// Search roomtype with id
	if tx := entity.DB().Where("id = ?", booking.RoomTypeID).First(&room); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "RoomType not found"})
		return
	}
	// Search member with id
	if tx := entity.DB().Where("id = ?", booking.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Member not found"})
		return
	}

	// Create Booking
	b := entity.Booking{
		Fromdate: booking.Fromdate,
		Todate:   booking.Todate,
		Adult:    booking.Adult,
		Chil:     booking.Chil,
		Price:    booking.Price,
		Package:  packagess,
		Member:   member,
		RoomType: room,
	}

	// Save
	if err := entity.DB().Create(&b).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": b})
}

// GET /booking/:id
func GetBooking(c *gin.Context) {
	var booking entity.Booking
	id := c.Param("id")
	if err := entity.DB().Preload("Package").Preload("RoomType").Preload("Member").Raw("SELECT * FROM bookings WHERE id = ?", id).Find(&booking).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": booking})
}

// GET /bookingmember/:id
func GetBookingByMemberID(c *gin.Context) {
	var booking []entity.Booking
	id := c.Param("id")
	if err := entity.DB().Preload("Package").Preload("RoomType").Preload("Member").Raw("SELECT * FROM bookings WHERE member_id = ?", id).Find(&booking).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": booking})
}

// GET /bookings
func ListBooking(c *gin.Context) {
	var booking []entity.Booking
	if err := entity.DB().Preload("Package").Preload("RoomType").Preload("Member").Raw("SELECT * FROM bookings").Find(&booking).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": booking})
}

// DELETE /bookings/:id
func DeleteBooking(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM bookings WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Booking not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /bookings
func UpdateBooking(c *gin.Context) {
	var booking entity.Booking
	var result entity.Booking

	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search Booking with id
	if tx := entity.DB().Where("id = ?", booking.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Booking not found"})
		return
	}

	if err := entity.DB().Save(&booking).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": booking})
}
