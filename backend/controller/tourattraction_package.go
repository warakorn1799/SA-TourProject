package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /tourattpackage
func CreateTourAttractionPackage(c *gin.Context) {
	var tourpackage entity.TourAttractionPackage
	var touratts entity.TourAttraction
	var packages entity.Package

	// bind เข้าตัวแปร tourpackage
	if err := c.ShouldBindJSON(&tourpackage); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search TourAttraction with id
	if tx := entity.DB().Where("id = ?", tourpackage.TourAttractionID).First(&touratts); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "TourAttraction not found"})
		return
	}
	// Search Package with id
	if tx := entity.DB().Where("id = ?", tourpackage.PackageID).First(&packages); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Package not found"})
		return
	}

	// Create TourAttractionPackage
	tp := entity.TourAttractionPackage{
		TourAttraction: touratts,
		Package:        packages,
	}

	// Save
	if err := entity.DB().Create(&tp).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": tp})
}

// GET /tourattpackage/:id
func GetTourAttractionPackage(c *gin.Context) {
	var tourpackage entity.TourAttractionPackage
	id := c.Param("id")
	if err := entity.DB().Preload("TourAttraction").Preload("Package").Raw("SELECT * FROM tour_attraction_packages WHERE id = ?", id).Find(&tourpackage).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": tourpackage})
}

// GET /tourattpackages
func ListTourAttractionPackage(c *gin.Context) {
	var tourpackage []entity.TourAttractionPackage
	if err := entity.DB().Preload("TourAttraction").Preload("Package").Raw("SELECT * FROM tour_attraction_packages").Find(&tourpackage).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": tourpackage})
}

// DELETE /tourattpackages/:id
func DeleteTourAttractionPackage(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM tour_attraction_packages WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "TourAttractionPackage not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}
