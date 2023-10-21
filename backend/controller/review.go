package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /reviews
func CreateReview(c *gin.Context) {
	var review entity.Review
	var rate entity.Rate
	var member entity.Member
	var packagess entity.Package

	// bind เข้าตัวแปร review
	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Search rate with id
	if tx := entity.DB().Where("id = ?", review.RateID).First(&rate); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Rate not found"})
		return
	}
	// Search member with id
	if tx := entity.DB().Where("id = ?", review.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Member not found"})
		return
	}

	

	// Create Review
	rv := entity.Review{
		Companion: review.Companion,
		Comment:   review.Comment,
		Image:     review.Image,
		Rate:      rate,
		Member:    member,
		Package:   packagess,
		
	}

	// Save
	if err := entity.DB().Create(&rv).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rv})
}

// GET /review/:id
func GetReview(c *gin.Context) {
	var review entity.Review
	id := c.Param("id")
	if err := entity.DB().Preload("Rate").Preload("Member").Raw("SELECT * FROM reviews WHERE id = ?", id).Find(&review).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": review})
}

// GET /reviews
func ListReview(c *gin.Context) {
	var review []entity.Review
	if err := entity.DB().Preload("Rate").Preload("Member").Raw("SELECT * FROM reviews").Find(&review).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": review})
}

// DELETE /reviews/:id
func DeleteReview(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM reviews WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Review not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /reviews
func UpdateReview(c *gin.Context) {
	var review entity.Review
	var result entity.Review

	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search review with id
	if tx := entity.DB().Where("id = ?", review.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Review not found"})
		return
	}

	if err := entity.DB().Save(&review).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": review})
}


// GET /average-rate-by-package/:packageID
// func GetAverageRateByPackageID(c *gin.Context) {
// 	packageID := c.Param("packageID")

// 	var averageRate struct {
// 		AverageRate int64 `json:"averageRate"`
// 	}

// 	// Execute a SQL query to calculate the average rate for a specific package
// 	if err := entity.DB().Preload("Rate").Raw("SELECT AVG(Level) AS averageRate FROM reviews WHERE rate_id = ?", packageID).Scan(&averageRate).Error; err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"data": averageRate})
// }
func GetAverageRateByPackageID(c *gin.Context) {
	packageID := c.Param("packageID")

	var averageRate struct {
		AverageRate float64 `json:"averageRate"`
	}

	// Execute a SQL query to calculate the average rate for a specific package
	if err := entity.DB().Raw("SELECT COALESCE(AVG(rates.Level), 0) AS averageRate FROM reviews JOIN rates ON reviews.rate_id = rates.id WHERE reviews.rate_id = ?", packageID).Scan(&averageRate).Error; 
	err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": averageRate})
}

