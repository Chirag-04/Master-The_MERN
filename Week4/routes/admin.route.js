import express from  "express"
import adminAuthMiddleware from "../middleware/admin.js";
const router = express.Router();


// 
router.post('/signup' ,(req ,res)=>{
    // logic to signup
})

router.post('/courses' , adminAuthMiddleware , (req ,res)=>{
    // logic to create courses
})


router.get('/courses' ,adminAuthMiddleware , (req ,res)=>{
    // logic to fetch all courses
})



export default router;