import crudServices from '../services/crudServices';
import db from '../models/index'

let homePage = async (req, res) => {
    try{
        // let data = await db.User.findAll();
        // console.log(data)
        return res.render('homePage.ejs')
    } catch(e) {
        console.log(e)
    }
    
}    
let createUserPage = async (req, res) => {
    return res.render('createUser.ejs')
}
let postCrud = async (req, res) => {
    let msg = await crudServices.createNewUser(req.body)
    console.log(msg)
    return res.send('post from server')
}

let displayUser = async (req, res) => {
    let data = await crudServices.getAllUser()
    console.log(data)
    return res.render("displayUser.ejs", {
        data: data
    })
}

let updateUser = async (req, res) => {
    let userId = req.query.id
    if(userId){
        let userData =await crudServices.getUserId(userId)
        console.log('data: ',userData )
        return res.render("updateUser",{
            userData: userData
        })
    }else{
        return res.send("no user found!")
    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    let allUsers = await crudServices.updateUserData(data)
    return res.render("displayUser.ejs", {
        data: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id
    if(id){
        await crudServices.deleteUserById(id)
        return res.send("user deleted successfully")

    }else {
        return res.send("user not found")
    }
}
module.exports = {
    homePage: homePage,
    createUserPage : createUserPage,
    postCrud : postCrud,
    displayUser: displayUser,
    updateUser: updateUser,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
};