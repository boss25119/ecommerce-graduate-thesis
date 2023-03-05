import express from "express";
import homeController from '../controllers/homeController'

const router = express.Router();

const initWebRoute = (app) => {
	router.get("/", homeController.homePage)
	
	router.get("/about", (req, res) => {
		return res.send("I'm Ngoc")
	})
	
	router.get('/crud',homeController.crudPage)

	router.post('/post-crud',homeController.postCrud)
	return app.use("/", router)
}	

export default initWebRoute;