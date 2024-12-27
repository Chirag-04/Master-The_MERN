
import { mongoose } from 'mongoose';

//1 Defining the schema
const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    // referecing b/w collections in mongoose 
    // purchasedCoruse : array of purchased courses 
    purchasedCourses : [
        {
            type : mongoose.Schema.Types.ObjectId,
            refer :'Course'
        }
    ]
})

const courseSchema = new mongoose.Schema({
    topic : String,
    price : Number
})

// 2. Creating model
const User =  mongoose.model("User" , userSchema);
const Course = mongoose.model("Course" , courseSchema);

// 3. Perform CRUD
User.find({username : "John"});


