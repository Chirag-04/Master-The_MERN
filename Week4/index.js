import express from "express";
import dotenv from "dotenv"
import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config()


const PORT = process.env.PORT;
app.get('/test',(req ,res)=>{
    res.json({msg : "Project Workig"})
})


// routes

app.use('/admin' , adminRouter);
app.use('/user' , userRouter);
// listen
app.listen(3000 , ()=>{
    console.log(`Server is runnig at ${PORT}`)
})

