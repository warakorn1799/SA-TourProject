package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST promotions
func CreatePromotion(c *gin.Context) {
	var promotion entity.Promotion

	// bind เข้าตัวแปร promotion
	if err := c.ShouldBindJSON(&promotion); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create Promotion
	pro := entity.Promotion{
		Name:     promotion.Name,
		Type:     promotion.Type,
		Fromdate: promotion.Fromdate,
		Todate:   promotion.Todate,
		Day:      promotion.Day,
	}

	//Save
	if err := entity.DB().Create(&pro).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": pro})
}

// GET /promotion/:id
func GetPromotion(c *gin.Context) {
	var promotion entity.Promotion
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM promotions WHERE id = ?", id).Find(&promotion).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": promotion})
}

// GET /promotions

func ListPromotions(c *gin.Context) {
	var promotion []entity.Promotion
	if err := entity.DB().Raw("SELECT * FROM promotions").Find(&promotion).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": promotion})
}

// DELETE /promotions/:id
func DeletePromotion(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM promotions WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Promotion not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /promotions
func UpdatePromotion(c *gin.Context) {
	var promotion entity.Promotion
	var result entity.Promotion

	if err := c.ShouldBindJSON(&promotion); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา promotion with id
	if tx := entity.DB().Where("id = ?", promotion.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "promotion not found"})
		return
	}

	if err := entity.DB().Save(&promotion).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": promotion})
}
