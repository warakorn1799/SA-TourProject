package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /Package
func CreatePackage(c *gin.Context) {
	var packages entity.Package
	var promotion entity.Promotion

	// bind เข้าตัวแปร package
	if err := c.ShouldBindJSON(&packages); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Search Promotion with id
	if tx := entity.DB().Where("id = ?", packages.PromotionID).First(&promotion); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Promotion not found"})
		return
	}

	// Create Package
	pack := entity.Package{
		Name:       packages.Name,
		Type:       packages.Type,
		Fromdate:   packages.Fromdate,
		Todate:     packages.Todate,
		Day:        packages.Day,
		Status:     packages.Status,
		Person:     packages.Person,
		Detail:     packages.Detail,
		Price:      packages.Price,
		Priceadult: packages.Priceadult,
		Pricechil:  packages.Pricechil,
		Promotion:  promotion,
	}

	// Save
	if err := entity.DB().Create(&pack).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": pack})
}

// GET /package/:id
func GetPackage(c *gin.Context) {
	var packages entity.Package
	id := c.Param("id")
	if err := entity.DB().Preload("Promotion").Raw("SELECT * FROM packages WHERE id = ?", id).Find(&packages).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": packages})
}

// GET /packagenumber
func CountPackages(c *gin.Context) {
	var count int64
	if err := entity.DB().Model(&entity.Package{}).Count(&count).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": count})
}

// GET /packages
func ListPackage(c *gin.Context) {
	var packages []entity.Package
	if err := entity.DB().Preload("Promotion").Raw("SELECT * FROM packages").Find(&packages).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": packages})
}

// DELETE /packages/:id
func DeletePackage(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM packages WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Package not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /Packages
func UpdatePackage(c *gin.Context) {
	var packages entity.Package
	var result entity.Package

	if err := c.ShouldBindJSON(&packages); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search Package with id
	if tx := entity.DB().Where("id = ?", packages.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Package not found"})
		return
	}

	if err := entity.DB().Save(&packages).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": packages})
}
