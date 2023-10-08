package entity

import (
	"time"

	"gorm.io/gorm"
)

type TourAttraction struct {
	gorm.Model
	Name      string
	Location  string
	Image     []byte
	Map       string
	Opentime  time.Time
	Closetime time.Time
	Fromdate  time.Time
	Todate    time.Time
	Price     int
	AdminID   *uint
	Admin     Admin `gorm:"foreignKey:AdminID"`
}
