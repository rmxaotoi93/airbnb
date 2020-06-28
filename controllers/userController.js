const User = require('../models/user')
const bcrypt = require('bcrypt')
const {loginWithEmail,generateToken} = require('../service/authService')

exports.getUserList = async(req,res) =>{
    try{
        const userList = await User.find({})
        res.status(200).json({
            userList
        })

    }catch(err){
        res.status(400).json({
            mess: "Error happens"
        })
    }
}

exports.updateUsers = async(req,res) =>{
    try{
        const { name, email, password, introduction, token} = req.body
        if(!name && !email && !password && !introduction){
            return res.status(400).json({
                mess: "Name, email, password, introduction are required"
            })
        //tu token lay user
       
        }

        if(!token){
            return res.status(400).json({
                mess: 'require token'
            })
        }
         const user = await User.findOne({tokens: token})
            if(email){
               user.email = email
            }
            if(name){
                user.name = name
            }
            if(password){
                user.password = password
            }
            if(introduction){
                user.introduction = introduction
            }
            await user.save()
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(err){
        res.status(400).json({
            mess: err.mess
        })
    }
}

exports.createUser = async(req,res) => {
    try{
        const { name, email , password, role, introduction} = req.body
        if(!name || !email || !password || !role ){
           return res.status(400).json({
                mess: "Name, email, password, role, introduction are required"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        if(role === "Host"){
            if(!introduction){
             return res.status(400).json({
                    mess: err.mess
                })
            }
        }
       const user = await User.create({
            email:email,
            name:name,
            password: hashPassword,
            role:role,
            introduction:introduction,
        })
        console.log('useeer',user)

        const token = await generateToken(user)
        
        res.status(200).json({
            status:'success',
            data: {user,token}
        })
    }catch(err){
 res.status(400).json({
            mess: err.message
        })
    }
}

exports.login = async(req,res) =>{
    try{
        const {email, password} = req.body
        if(!email || !password) throw new Error('email and password are wrong')

        // check email and password is correct
        const user = await loginWithEmail(email,password)
        const token = await generateToken(user)

        res.status(200).json({
            status: 'success',
            data: {user, token}
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

