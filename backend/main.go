package main

import (
	"github.com/gin-gonic/gin"
	"github.com/warakorn1799/tour-project/controller"
	"github.com/warakorn1799/tour-project/entity"
)

const PORT = "80"

func main() {

	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	// Member Routes
	r.GET("/members", controller.ListMembers)
	r.GET("/member/:id", controller.GetMember)
	r.GET("/memberemail/:email", controller.GetMemberEmail)
	r.POST("/members", controller.CreateMember)
	r.PATCH("/members", controller.UpdateMember)
	r.DELETE("/members/:id", controller.DeleteMember)

	//Payment Routes
	r.GET("/payments", controller.ListPayments)
	r.GET("/payment/:id", controller.GetPayment)
	r.POST("/payments", controller.CreatePayment)
	r.PATCH("/payments", controller.UpdatePayment)
	r.DELETE("/payments/:id", controller.DeletePayment)

	//Country Routes
	r.GET("/countries", controller.ListCountry)
	r.GET("/country/:id", controller.GetContry)
	r.POST("/countries", controller.CreateCountry)
	r.PATCH("/countries", controller.UpdateCountry)
	r.DELETE("/countries/:id", controller.DeleteCountry)

	//Admin Routes
	r.GET("/admins", controller.ListAdmins)
	r.GET("/admin/:id", controller.GetAdmin)
	r.POST("/admins", controller.CreateAdmin)
	r.PATCH("/admins", controller.UpdateAdmin)
	r.DELETE("/admins/:id", controller.DeleteAdmin)

	//TourAttraction Routes
	r.GET("/touratts", controller.ListTourAttraction)
	r.GET("/touratt/:id", controller.GetTourAttractions)
	r.POST("/touratts", controller.CreateTourAttraction)
	r.PATCH("/touratts", controller.UpdateTourAttraction)
	r.DELETE("/touratts/:id", controller.DeleteTourAttraction)

	//Promotion Routes
	r.GET("/promotions", controller.ListPromotions)
	r.GET("/promotion/:id", controller.GetPromotion)
	r.POST("/promotions", controller.CreatePromotion)
	r.PATCH("/promotions", controller.UpdatePromotion)
	r.DELETE("/promotions/:id", controller.DeletePromotion)

	//Package Routes
	r.GET("/packages", controller.ListPackage)
	r.GET("/package/:id", controller.GetPackage)
	r.POST("/packages", controller.CreatePackage)
	r.PATCH("/packages", controller.UpdatePackage)
	r.DELETE("/packages/:id", controller.DeletePackage)

	//Booking Routes
	r.GET("/bookings", controller.ListBooking)
	r.GET("/booking/:id", controller.GetBooking)
	r.GET("/bookingmember/:id", controller.GetBookingByMemberID)
	r.POST("/bookings", controller.CreateBooking)
	r.PATCH("/bookings", controller.UpdateBooking)
	r.DELETE("/bookings/:id", controller.DeleteBooking)

	//RoomType Routes
	r.GET("/roomtypes", controller.ListRoomtype)
	r.GET("/roomtype/:id", controller.GetRoomtype)
	r.POST("/roomtypes", controller.CreateRoomtypes)
	r.PATCH("/roomtypes", controller.UpdateRoomtype)
	r.DELETE("/roomtypes/:id", controller.DeleteRoomtype)

	//Rate Routes
	r.GET("/rates", controller.ListRate)
	r.GET("/rate/:id", controller.GetRate)
	r.POST("/rates", controller.CreateRate)
	r.PATCH("/rates", controller.UpdateRate)
	r.DELETE("/rates/:id", controller.DeleteRate)

	//Review Routes
	r.GET("/reviews", controller.ListReview)
	r.GET("/review/:id", controller.GetReview)
	r.POST("/reviews", controller.CreateReview)
	r.PATCH("/reviews", controller.UpdateReview)
	r.DELETE("/reviews/:id", controller.DeleteReview)

	//TourAttractionPackage Routes
	r.GET("/tourpackages", controller.ListTourAttractionPackage)
	r.GET("/tourpackage/:id", controller.GetTourAttractionPackage)
	r.POST("/tourpackages", controller.CreateTourAttractionPackage)
	r.DELETE("/tourpackages/:id", controller.DeleteTourAttractionPackage)

	//ReviewPackage Routes
	r.GET("/reviewpackages", controller.ListReviewPackage)
	r.GET("/reviewpackage/:id", controller.GetReviewPackage)
	r.POST("/reviewpackages", controller.CreateReviewPackage)
	r.DELETE("/reviewpackages/:id", controller.DeleteReviewPackage)

	//Run the Server
	r.Run("localhost: " + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
