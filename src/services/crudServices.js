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
module.exports = {
    createNewUser: createNewUser   
} 