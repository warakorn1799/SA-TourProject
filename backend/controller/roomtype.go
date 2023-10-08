package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/entity"
)

// POST /roomtypes
func CreateRoomtypes(c *gin.Context) {
	var roomtypes entity.RoomType

	// bind เข้าตัวแปร roomtype
	if err := c.ShouldBindJSON(&roomtypes); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create roomtype
	room := entity.RoomType{
		Name: roomtypes.Name,
	}

	// Save
	if err := entity.DB().Create(&room).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": room})
}

// GET /roomtype/:id
func GetRoomtype(c *gin.Context) {
	var roomtype entity.RoomType
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM room_types WHERE id = ?", id).Find(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})
}

// GET /roomtypes
func ListRoomtype(c *gin.Context) {
	var roomtype []entity.RoomType
	if err := entity.DB().Raw("SELECT * FROM room_types").Find(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})
}

// DELETE /roomtypes/:id
func DeleteRoomtype(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM room_types WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "RoomType not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /roomtypes
func UpdateRoomtype(c *gin.Context) {
	var roomtype entity.RoomType
	var result entity.RoomType

	if err := c.ShouldBindJSON(&roomtype); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search roomtype with id
	if tx := entity.DB().Where("id = ?", roomtype.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "RoomType not found"})
		return
	}

	if err := entity.DB().Save(&roomtype).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": roomtype})
}
