package entity

import (

	"gorm.io/gorm"
)

type TourAttraction struct {
	gorm.Model
	Name      string
	Location  string
	Image1    string `gorm:"type:longtext"`
	Image2    string `gorm:"type:longtext"`
	Image3    string `gorm:"type:longtext"`
	Map       string `gorm:"type:longtext"`

	AdminID   *uint
	Admin     Admin `gorm:"foreignKey:AdminID"`
}