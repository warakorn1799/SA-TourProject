package entity

import "gorm.io/gorm"

type Rate struct {
	gorm.Model
	Score string
}
