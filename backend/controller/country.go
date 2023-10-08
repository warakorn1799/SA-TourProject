package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST Country
func CreateCountry(c *gin.Context) {
	var country entity.Country

	// bind เข้าตัวแปร country
	if err := c.ShouldBindJSON(&country); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create Country
	con := entity.Country{
		Name: country.Name,
	}

	//Save
	if err := entity.DB().Create(&con).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": con})
}

// GET /country/:id
func GetContry(c *gin.Context) {
	var country entity.Country
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM countries WHERE id = ?", id).Find(&country).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": country})
}

// GET /countries

func ListCountry(c *gin.Context) {
	var country []entity.Country
	if err := entity.DB().Raw("SELECT * FROM countries").Find(&country).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": country})
}

// DELETE /country/:id
func DeleteCountry(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM countries WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "country not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /countries
func UpdateCountry(c *gin.Context) {
	var country entity.Country
	var result entity.Country

	if err := c.ShouldBindJSON(&country); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา country with id
	if tx := entity.DB().Where("id = ?", country.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "country not found"})
		return
	}

	if err := entity.DB().Save(&country).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": country})
}
