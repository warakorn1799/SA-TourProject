package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /payments
func CreatePayment(c *gin.Context) {
	var payment entity.Payment
	var member entity.Member
	var booking entity.Booking

	// bind เข้าตัวแปร payment
	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search member with id
	if tx := entity.DB().Where("id = ?", payment.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	// Search Booking with id
	if tx := entity.DB().Where("id = ?", payment.BookingID).First(&booking); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Booking not found"})
		return
	}

	// Create Payment
	pay := entity.Payment{
		Receipt: payment.Receipt,
		Date:    payment.Date,
		Member:  member,
		Booking: booking,
	}

	// Save
	if err := entity.DB().Create(&pay).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": pay})
}

// GET /payment/:id
func GetPayment(c *gin.Context) {
	var payment entity.Payment
	id := c.Param("id")
	if err := entity.DB().Preload("Member").Preload("Booking").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}

// GET /payments
func ListPayments(c *gin.Context) {
	var payments []entity.Payment
	if err := entity.DB().Preload("Member").Preload("Booking").Raw("SELECT * FROM payments").Find(&payments).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payments})
}

// DELETE /payments/:id
func DeletePayment(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM payments WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /payments
func UpdatePayment(c *gin.Context) {
	var payment entity.Payment
	var result entity.Payment

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search payment with id
	if tx := entity.DB().Where("id = ?", payment.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
		return
	}

	if err := entity.DB().Save(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}
