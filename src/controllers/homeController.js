import crudServices from '../services/crudServices';
import db from '../models/index'

let homePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        console.log(data)
        return res.render('homePage.ejs')
    } catch(e) {
        console.log(e)
    }
    
}    
let crudPage = async (req, res) => {
    return res.render('crud.ejs')
}
let postCrud = async (req, res) => {
    let msg = await crudServices.createNewUser(req.body)
    console.log(msg)
    return res.send('post from server')
}



module.exports = {
    homePage: homePage,
    crudPage : crudPage,
    postCrud : postCrud
};