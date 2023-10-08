package entity

type BookingMember struct {
	BookingID *uint
	Booking   Booking `gorm:"foreignKey:BookingID"`
	MemberID  *uint
	Member    Member `gorm:"foreignKey:MemberID"`
}
