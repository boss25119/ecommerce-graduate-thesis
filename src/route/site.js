import express from "express";
import siteController from '../controllers/siteController'

const router = express.Router();

const initWebRoute = (app) => {
	
	router.get("/about", (req, res) => {
		return res.send("I'm Ngoc")
	})
	
	router.get('/create-user',siteController.createUserPage)
	
	router.post('/post-crud',siteController.postCrud)

	router.get("/read-user",siteController.displayUser)

	router.get("/edit-user-info", siteController.updateUser)

	router.post("/put-crud", siteController.putCRUD)

	router.get("/delete-crud", siteController.deleteCRUD)
	router.get("/", siteController.homePage)
	return app.use("/", router)
}	

export default initWebRoute;