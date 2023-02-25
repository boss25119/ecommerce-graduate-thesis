import express from "express";
import homeController from '../controllers/homeController'

const router = express.Router();

const initWebRoute = (app) => {
	router.get("/", homeController.homePage)
	
	router.get("/about", (req, res) => {
		return res.send("I'm Ngoc")
	})
	
	return app.use("/", router)
}	

export default initWebRoute;