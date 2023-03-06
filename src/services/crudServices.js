import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise( async (resolve, reject) => {
        try{
            let hashPasswordFromBcrypt = await hashUserPassword(data.password) 
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashPasswordFromBcrypt,
                address: data.address,
                phone: data.phone,
                gender: data.gender === '1'? true : false,
                roleid: data.roleid,
            })
            resolve('successfully user created!')
        }catch(e){
            reject(e)
        }
    })
}   
 
let hashUserPassword = (password) => {
    return new Promise (async (resolve, reject) => {
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        }catch(e){
            reject(e)
        }
    })
}

let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let users = await db.User.findAll({
                raw : true,
            });
            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}
let getUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where : {id : userId}, 
                raw: true
            })
            if(user){
                resolve(user)
            }else{
                resolve({})
            }
        }catch(e){
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: {id : data.id}
            })
            if(user){
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address

                await user.save();  
                let allUsers = db.User.findAll()
                resolve(allUsers)
            }else{
                resolve()
            }
            console.log('user: ', user.id)
        }catch(e){
            reject(e)
        }
    })
}

let deleteUserById =(id) => {
    new Promise(async(resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: {id : id}
            })
            if(user){
                await user.destroy()
                resolve()
            }
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserId: getUserId,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById
} 