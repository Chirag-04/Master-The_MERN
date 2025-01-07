const mongoose = require('mongoose');

// connect the mongodb 
mongoose.connect("mongodb+srv://binarycoderz04:0ICf5HmSKff6zZsf@cluster0.tbsic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


// create schema 
const userSchema =  mongoose.Schema({
    email : String,
    password : String,
    purchasedCourses : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'Course'
        }
    ]
})

const courseSchema =  mongoose.Schema({
    topic : String,
    price : Number
})

// create model
const User =  mongoose.model("User", userSchema);
const Course =  mongoose.model("Course", courseSchema);

// crud operation


async function CRUD() {
    try{
        const course = await new Course({
            topic : "Backend",
            price : 150
        });

        const savedCourse = await course.save();

        const user =  await new User({
            email : "hello@gmail.com",
            password : "123123",
            purchasedCourses :[savedCourse._id]
        })
        const savedUser = await user.save();
        console.log("User created:", savedUser);
        console.log("course created" , savedCourse);
    }catch(err){
        console.log("error in CRUD operation" ,err);
    }
}

CRUD();