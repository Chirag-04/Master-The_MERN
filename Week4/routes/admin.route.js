import express from  "express"
import adminAuthMiddleware from "../middleware/admin.js";
const router = express.Router();
import { Admin, Course } from "../db/db.js";

// 
router.post('/signup' , async(req ,res)=>{
    // logic to signup\
    const username  = req.body.username;
    const password =  req.body.password;
    try{
            // checks
    const isAdmin = await Admin.findOne({
        username : username,
        password :  password
    })
    if(isAdmin){
        return res.json({msg : "Admin already exist"});
    }
    const newUser =  await Admin.create({
        username :  username,
        password : password
    })
    // newUser.save(); // dont need to call explicitly 

    res.status(200).json({
        msg : "Admin created successfully"
    })


    }catch(err){
        console.log("error in signup route of admin" , err);
        res.status(500).json({msg  : "Server error "});
    }
})

router.post('/courses' , adminAuthMiddleware , async(req ,res)=>{
    // logic to create courses

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imgLink = req.body.imageLink;
    // input validation using zod
    try{
        const newCourse = await Course.create({
            title :  title,
            description :  description,
            price : price,
            imgLink : imgLink
        })

        res.status(200).json({msg : "Course created successfully"});
    }catch(err){
        console.log("error in coourses route of admin" , err);
        res.status(500).json({msg  : "Server error " , courseId: newCourse._id });
    }
})


router.get('/courses' ,adminAuthMiddleware , async(req ,res)=>{
    // logic to fetch all courses
    try{
        const allCourses = Course.find({})

        res.status(200).json(allCourses);
    }catch(err){
        console.log("error in geting courses route of admin")
        res.status(500).json({msg: "Server error"});
    }
})


export default router;