import { User } from "../db/db.js";

async function userAuthMiddleware(req , res , next){
    const username  = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({
        username : username,
        password : password
    })

    if(user){
        next();
    }else{
        return res.status(403).json({msg : "User does not exists"})
    }
}

export default userAuthMiddleware;