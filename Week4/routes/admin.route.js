import express from  "express"
import adminAuthMiddleware from "../middleware/admin.js";
const router = express.Router();
import { Admin } from "../db/db.js";

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

router.post('/courses' , adminAuthMiddleware , (req ,res)=>{
    // logic to create courses
})


router.get('/courses' ,adminAuthMiddleware , (req ,res)=>{
    // logic to fetch all courses
})



export default router;