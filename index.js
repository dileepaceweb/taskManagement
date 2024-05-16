const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();
//middleware 
const taskRoute=require("./route/taskRoute");
const PORT=process.env.PORT||4000;
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/Management")
.then(()=>{
   console.log("Database Connection is successfully")
})
.catch((error)=>{
    console.log("Database connection failed",error)
})

//routes
app.use("/",taskRoute)

app.listen(PORT,()=>{
    console.log("Successfully connected port:",PORT)
})
