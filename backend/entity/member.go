package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	Firstname string
	Lastname  string
	CountryID *uint
	Country   Country `gorm:"foreignKey:CountryID"`
	Email     string
	Password  string
	Phone     string
}
