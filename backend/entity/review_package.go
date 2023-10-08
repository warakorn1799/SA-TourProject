package entity

type ReviewPackage struct {
	ReviewID *uint
	Review   Review `gorm:"foreignKey:ReviewID"`

	PackageID *uint
	Package   Package `gorm:"foreignKey:PackageID"`
}
