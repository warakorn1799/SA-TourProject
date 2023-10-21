package entity

import (
	"gorm.io/gorm"
)

type Package struct {
	gorm.Model
	Name       string
	Highlights string
	Detail     string
	Priceadult int
	Pricechil  int

	PromotionID *uint
	Promotion   Promotion `gorm:"foreignKey:PromotionID"`

	AdminID   *uint
	Admin     Admin `gorm:"foreignKey:AdminID"`

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	
}