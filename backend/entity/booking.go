package entity

import (
	"time"

	"gorm.io/gorm"
)

type Booking struct {
	gorm.Model
	Fromdate time.Time
	Todate   time.Time
	Adult    int
	Chil     int
	Price    int

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	PackageID *uint
	Package   Package `gorm:"foreignKey:PackageID"`

	RoomTypeID *uint
	RoomType   RoomType `gorm:"foreignKey:RoomTypeID"`
}
