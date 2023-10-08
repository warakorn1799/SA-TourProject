package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /reviewpackages
func CreateReviewPackage(c *gin.Context) {
	var reviewpackage entity.ReviewPackage
	var review entity.Review
	var packages entity.Package

	// bind เข้าตัวแปร reviewpackage
	if err := c.ShouldBindJSON(&reviewpackage); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search Review with id
	if tx := entity.DB().Where("id = ?", reviewpackage.ReviewID).First(&review); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Review not found"})
		return
	}
	// Search Package with id
	if tx := entity.DB().Where("id = ?", reviewpackage.PackageID).First(&packages); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Package not found"})
		return
	}

	// Create ReviewPackage
	rp := entity.ReviewPackage{
		Review:  review,
		Package: packages,
	}

	// Save
	if err := entity.DB().Create(&rp).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rp})
}

// GET /reviewpackage/:id
func GetReviewPackage(c *gin.Context) {
	var reviewpackage entity.ReviewPackage
	id := c.Param("id")
	if err := entity.DB().Preload("Review").Preload("Package").Raw("SELECT * FROM review_packages WHERE id = ?", id).Find(&reviewpackage).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": reviewpackage})
}

// GET /reviewpackages
func ListReviewPackage(c *gin.Context) {
	var reviewpackage []entity.ReviewPackage
	if err := entity.DB().Preload("Review").Preload("Package").Raw("SELECT * FROM review_packages").Find(&reviewpackage).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": reviewpackage})
}

// DELETE /reviewpackages/:id
func DeleteReviewPackage(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM review_packages WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ReviewPackage not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}
