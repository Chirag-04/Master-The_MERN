import jwt from "jsonwebtoken"
import dotenv from "dotenv"

 function userAuthMiddleware(req , res , next){
      const token = req.headers.authorization;
        // "Bearer  122121212"
        const words = token.split(" ")
        const jwtToken = words[1];
        // actaul jwtToken
        // now we need to verify 
        const decodedValue = jwt.verify(jwtToken , process.env.JWT_SECRET_KEY);
        if(decodedValue.username){
            next();  
        }else{
            res.status(403).json({
                msg : "You are not authneticated"
            })
        }
        
}

export default userAuthMiddleware;