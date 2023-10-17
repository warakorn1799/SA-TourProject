package entity

import (
	"time"

	"gorm.io/gorm"
)

type Package struct {
	gorm.Model
	Name       string
	Type       string
	Fromdate   time.Time
	Todate     time.Time
	Day        string
	Status     string
	Person     int
	Detail     string
	Price      int
	Priceadult int
	Pricechil  int

	PromotionID *uint
	Promotion   Promotion `gorm:"foreignKey:PromotionID"`
}
