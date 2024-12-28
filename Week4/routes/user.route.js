import express from  "express"
import userAuthMiddleware from "../middleware/user.js";
const router = express.Router();
import { User } from "../db/db.js";
import { Course } from "../db/db.js";
import mongoose from "mongoose";
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username =  req.body.username;
    const password = req.body.password;

    // check 
    const isUser = await User.findOne({username : username , password : password});

    if(isUser) return res.status(400).json({msg : "User already exist"});

    // otherwise
    const newUser  = await User.create({
        username : username ,
        password :  password
    })

    res.status(200).json(newUser);
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logi
    const allcourses =  await Course.find({});
    res.status(200).json({courses : allcourses})
});

router.post('/courses/:courseId', userAuthMiddleware ,async(req, res) => {
    // Implement course purchase logic
    // find the user 
    // push the course in the purhcased course 

    const courseId = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;
    User.updateOne(
        {username : username , password : password},
        {
            $push : courseId
        }

    )
});

router.get('/purchasedCourses', userAuthMiddleware , async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    const user = await User.findOne({username: username ,password : password});
    // user.purchasedCourses -->array
    // i will have all the array ogt object ID
    // now i want to get the coures
    const courses =  await Course.find({
        _id : {
            $in : user.purchasedCourses
        }
    })

    res.status(200).json(courses);
});
export default router;