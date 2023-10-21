package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /touratt
func CreateTourAttraction(c *gin.Context) {
	var touratt entity.TourAttraction
	var admin entity.Admin

	// bind เข้าตัวแปร touratt
	if err := c.ShouldBindJSON(&touratt); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search admin with id
	if tx := entity.DB().Where("id = ?", touratt.AdminID).First(&admin); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Admin not found"})
		return
	}

	// Create TourAttraction
	tour := entity.TourAttraction{
		Name:      touratt.Name,
		Location:  touratt.Location,
		Image1:     touratt.Image1,
		Image2:     touratt.Image2,
		Image3:     touratt.Image3,
		Map:       touratt.Map,
		
		Admin:     admin,
	}

	// Save
	if err := entity.DB().Create(&tour).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": tour})
}

// GET /touratt/:id
func GetTourAttractions(c *gin.Context) {
	var touratt entity.TourAttraction
	id := c.Param("id")
	if err := entity.DB().Preload("Admin").Raw("SELECT * FROM tour_attractions WHERE id = ?", id).Find(&touratt).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": touratt})
}

// GET /touratts
func ListTourAttraction(c *gin.Context) {
	var touratt []entity.TourAttraction
	if err := entity.DB().Preload("Admin").Raw("SELECT * FROM tour_attractions").Find(&touratt).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": touratt})
}

// DELETE /touratts/:id
func DeleteTourAttraction(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM tour_attractions WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "TourAttraction not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /TourAttraction
func UpdateTourAttraction(c *gin.Context) {
	var touratt entity.TourAttraction
	var result entity.TourAttraction

	if err := c.ShouldBindJSON(&touratt); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search TourAttraction with id
	if tx := entity.DB().Where("id = ?", touratt.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "TourAttraction not found"})
		return
	}

	if err := entity.DB().Save(&touratt).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": touratt})
}