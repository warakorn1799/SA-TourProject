package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /rate
func CreateRate(c *gin.Context) {
	var rate entity.Rate

	// bind เข้าตัวแปร rate
	if err := c.ShouldBindJSON(&rate); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create rate
	rat := entity.Rate{
		Score: rate.Score,
	}

	// Save
	if err := entity.DB().Create(&rat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rat})
}

// GET /rate/:id
func GetRate(c *gin.Context) {
	var rate entity.Rate
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM rates WHERE id = ?", id).Find(&rate).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rate})
}

// GET /rates
func ListRate(c *gin.Context) {
	var rate []entity.Rate
	if err := entity.DB().Raw("SELECT * FROM rates").Find(&rate).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rate})
}

// DELETE /rates/:id
func DeleteRate(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM rates WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Rate not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /rates
func UpdateRate(c *gin.Context) {
	var rate entity.Rate
	var result entity.Rate

	if err := c.ShouldBindJSON(&rate); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search rate with id
	if tx := entity.DB().Where("id = ?", rate.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Rate not found"})
		return
	}

	if err := entity.DB().Save(&rate).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rate})
}
