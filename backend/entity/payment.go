package entity

import (
	"time"

	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	Receipt string `gorm:"type:longtext"`

	Date time.Time

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	BookingID *uint
	Booking   Booking `gorm:"foreignKey:BookingID"`
}
