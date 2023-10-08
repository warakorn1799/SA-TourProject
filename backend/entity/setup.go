package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("TourDB.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		&Admin{},
		&Booking{},
		&Country{},
		&Member{},
		&Package{},
		&Payment{},
		&Promotion{},
		&Review{},
		&RoomType{},
		&TourAttraction{},
		&Rate{},
		&TourAttractionPackage{},
		&ReviewPackage{},
		&BookingMember{},
	)
	db = database

	// Country Data
	Austria := Country{
		Name: "Austria",
	}
	db.Model(&Country{}).Create(&Austria)
	China := Country{
		Name: "China",
	}
	db.Model(&Country{}).Create(&China)
	Thaiand := Country{
		Name: "Thaiand",
	}
	db.Model(&Country{}).Create(&Thaiand)
	France := Country{
		Name: "France",
	}
	db.Model(&Country{}).Create(&France)
	India := Country{
		Name: "India",
	}
	db.Model(&Country{}).Create(&India)
	Japan := Country{
		Name: "Japan",
	}
	db.Model(&Country{}).Create(&Japan)
	Korea := Country{
		Name: "Korea",
	}
	db.Model(&Country{}).Create(&Korea)
	UK := Country{
		Name: "UK",
	}
	db.Model(&Country{}).Create(&UK)
	US := Country{
		Name: "US",
	}
	db.Model(&Country{}).Create(&US)

	// Rate Data
	Excellent := Rate{
		Score: "Excellent",
	}
	db.Model(&Rate{}).Create(&Excellent)
	Good := Rate{
		Score: "Good",
	}
	db.Model(&Rate{}).Create(&Good)
	Fair := Rate{
		Score: "Fair",
	}
	db.Model(&Rate{}).Create(&Fair)
	Poor := Rate{
		Score: "Poor",
	}
	db.Model(&Rate{}).Create(&Poor)
	opinion := Rate{
		Score: "No opinion",
	}
	db.Model(&Rate{}).Create(&opinion)

	// RoomType Data
	single := RoomType{
		Name: "Single",
	}
	db.Model(&RoomType{}).Create(&single)
	double := RoomType{
		Name: "Double",
	}
	db.Model(&RoomType{}).Create(&double)
	triple := RoomType{
		Name: "Triple",
	}
	db.Model(&RoomType{}).Create(&triple)
	db.Model(&RoomType{}).Create(&double)
	family := RoomType{
		Name: "Family",
	}
	db.Model(&RoomType{}).Create(&family)
}
