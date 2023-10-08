package entity

import (
	"time"

	"gorm.io/gorm"
)

type Promotion struct {
	gorm.Model
	Name     string
	Type     string
	Fromdate time.Time
	Todate   time.Time
	Day      string
}
