
import User from "../models/userModel.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import sendError from "../utils/sendError.js";
import jwt from "jsonwebtoken"





export const isAuthenticated =catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new sendError("please login first",401))
    }

    const decoded =   jwt.verify(token,process.env.JWT_SECRET)

     const user = await User.findById(decoded.id)
     req.user = user
     next()
})


export const isAuthorize =  (...roles) => {
    return (req, res, next) => {


        if (!roles.includes(req.user.role)) {
            return next(new sendError(`Your not authorized to access this `))
        }

        next()
    }
}