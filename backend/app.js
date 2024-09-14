import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from  "./routes/userRoutes.js"
import cors from "cors"
import { dbConnect } from "./db/dbConnect.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";
import adminRoutes from "./routes/adminRoutes.js"

const app=express();

dotenv.config({path:"backend/config/config.env"})



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions ={
   origin:"*",

}
app.use(cors({corsOptions}));
app.use(cookieParser())
app.use(express.json())

//databse connection
dbConnect();



app.use('/api/v1', userRoutes)
app.use('/api/v1',adminRoutes)


if (process.env.NODE_ENV === "PRODUCTION") {
   app.use(express.static(path.join(__dirname, "../frontend/build")));

   app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
   });
 }






//error middleware to handle errors
app.use(errorMiddleware)
app.listen(process.env.PORT,() =>{
   console.log(`server is up and running on ${process.env.PORT}`);

})





