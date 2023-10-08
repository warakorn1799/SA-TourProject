package entity

import "gorm.io/gorm"

type Review struct {
	gorm.Model
	Companion string
	Comment   string
	Image     []byte

	Packages []Package `gorm:"many2many:Package_Review"`

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	RateID *uint
	Rate   Rate `gorm:"foreignKey:RateID"`
}
