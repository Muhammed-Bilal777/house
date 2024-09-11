 
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import sendError from "../utils/sendError.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import { sendToken } from "../utils/sendToken.js";


export const userRegister = catchAsyncError(async(req,res,next)=>{
    
    const {name,email,phoneNumber,password} =req.body;
    if(!name || !email || !phoneNumber || !password){
       return next(new sendError("Please provide all fields", 404))
    }

    const user = await User.create({name,email,phoneNumber,password})
    const userData = user.toJSON();
delete userData.password;
    res.status(200).send({
        message:"User created successfully",
        user : userData
    })
})


export const userLogin = catchAsyncError(async (req,res,next)=>{

    const {email,password} = req.body;
    const user = await User.findOne({email}).select("password name email phoneNumber")
    if(!user){
        return next(new sendError("Please registere first", 404))
    }

    const isPasswordMatching= await bcrypt.compare(password,user.password);
    if(!isPasswordMatching){
        
            return next(new sendError("email or password is not matching", 404))
         
        }
    
    const userData = user.toJSON();
    delete userData.password;
    sendToken(userData,200,res)
   
    
})

// user logout

export const userLogout = catchAsyncError(async (req,res,next)=>{

    res.status(200).cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    }).send({
        message : "logout successfully"
    })
   
    
})


//user Dashboard

export const UserProfile =catchAsyncError(async(req,res,next)=>{
    res.status(200).send({
        message : "User profile"
    })
})



