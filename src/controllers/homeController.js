import express from "express"

let homePage = (req, res) => {
    return res.render('homePage.ejs')
    
}    





module.exports = {
    homePage: homePage
};