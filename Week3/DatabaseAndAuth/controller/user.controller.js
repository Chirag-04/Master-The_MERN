import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model("Users", 
    {
        name : String,
        email : String,
        password : String,
    }
)
// signup
export const signup= async(req ,res)=>{
    try{
    const username =  req.body.username;
    const email =  req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email});
    if(existingUser){
       return res.status(400).json({
            msg : "User already exist"
        })
    }
    // create a neew user 
    const user =  new User({
        name : username,
        email : email,
        password : password
    })

    // save it to db

    await user.save();
    console.log(user);
    res.status(200).json({
        msg : "user create successfully"
    })
    }catch(err){
        console.log(err)
        res.status(400).json({msg : "Error in signin up"})
    }
}