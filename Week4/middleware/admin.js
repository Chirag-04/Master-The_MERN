
import { Admin } from "../db/db.js";
async function adminAuthMiddleware(req , res , next){
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({
        username : username,
        password : password
    })
    if(!admin){
        return res.status(403).json({msg : "Admin does not exists"});
    }else{
        // admin exist 
        next();
    }
}

export default adminAuthMiddleware;