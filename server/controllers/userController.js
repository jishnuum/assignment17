const { userModel } = require("../model/userModel")
const { generateToken } = require("../utilities/tokenGenerate")
const bcrypt =  require('bcrypt')

const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({error:"all fields are required"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = await new userModel({name,email,password:hashPassword})
        const saved = await newUser.save()
        const token = generateToken(saved._id)
        res.cookie("token",token)
        res.status(201).json({message:"user registered succesfully",saved})
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "internal server error"});
    }
}

const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({error:"All fields are required"})
        }
        const existUser = await userModel.findOne({email})
        if(!existUser){
            return res.status(400).json({error:"No user found"})
        }

        const comparePass = await bcrypt.compare(password,existUser.password)
        if(!comparePass){
            return res.status(400).json("Password does not match")
        }

        const token = generateToken(existUser._id)
        res.cookie("token",token)
        res.status(200).json({message:"user login succesfully",existUser})
        
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "internal server error"});

        
    }
}

module.exports = {
    register,
    login
}