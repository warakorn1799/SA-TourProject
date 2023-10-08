package entity

import "gorm.io/gorm"

type RoomType struct {
	gorm.Model
	Name string
}
