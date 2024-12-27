import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

// 1 connect to mongodb server
mongoose.connect('mongodb+srv://binarycoderz04:feEPns5YRnmWxnS9@cluster0.q3zrl.mongodb.net/lms_platform?retryWrites=true&w=majority&appName=Cluster0')


// 2 create schema

const adminSchema = new mongoose.Schema({
    username : String,
    password : String
})


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
})


const courseSchema = new mongoose.Schema({
    title : String,
    description :  String,
    prince : Number,
    imageLink : Number
})

// 3 create model

const Admin = mongoose.model("Admin" , adminSchema);
const User = mongoose.model("User" , userSchema);
const Course = mongoose.model("Course" , courseSchema);


// export 
export { Admin, User, Course };



