import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from  "./routes/userRoutes.js"
import cors from "cors"
import { dbConnect } from "./db/dbConnect.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";


const app=express();

dotenv.config({path:"backend/config/config.env"})
 
const corsOptions ={
   origin:"*",
   
}
app.use(cors({corsOptions}));
app.use(cookieParser())
app.use(express.json())

//databse connection
dbConnect();

app.use('/api/v1' , userRoutes)





//error middleware to handle errors
app.use(errorMiddleware)
app.listen(process.env.PORT,() =>{
   console.log(`server is up and running on ${process.env.PORT}`);
   
})





