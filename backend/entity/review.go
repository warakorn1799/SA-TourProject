package entity

import "gorm.io/gorm"

type Review struct {
	gorm.Model
	Companion string
	Comment   string
	Image     []byte

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	RateID *uint
	Rate   Rate `gorm:"foreignKey:RateID"`
}
