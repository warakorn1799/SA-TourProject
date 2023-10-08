package entity

import (
	"time"

	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	Receipt []byte
	Date    time.Time

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	BookingID *uint
	Booking   Booking `gorm:"foreignKey:BookingID"`
}
