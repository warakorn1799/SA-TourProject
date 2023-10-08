package entity

import "gorm.io/gorm"

type Admin struct {
	gorm.Model
	Firstname string
	Lastname  string
	Password  string
	Phone     string
	Email     string
}
