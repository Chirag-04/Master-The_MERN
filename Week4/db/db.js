import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

// 1 connect to mongodb server
mongoose.connect('')


// 2 create schema

const adminSchema = new mongoose.Schema({

})


const userSchema = new mongoose.Schema({

})


const courseSchema = new mongoose.Schema({


})

// 3 create model

const Admin = mongoose.model("Admin" , adminSchema);
const User = mongoose.model("User" , userSchema);
const Course = mongoose.model("Course" , courseSchema);


// export 




