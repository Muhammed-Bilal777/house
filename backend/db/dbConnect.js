import { log } from "console";
import mongoose from "mongoose";

export const dbConnect = async()=>{
    try {  
    
         await mongoose.connect(process.env.MONGO_URI) 
         console.log("databse connected sucessfully");
         
    } catch (error) {
        console.log(error);
        
    }
}