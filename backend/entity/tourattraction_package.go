package entity

type TourAttractionPackage struct {
	TourAttractionID *uint
	TourAttraction   TourAttraction `gorm:"foreignKey:TourAttractionID"`

	PackageID *uint
	Package   Package `gorm:"foreignKey:PackageID"`
}
