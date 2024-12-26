const express = require('express')
const app = express();
const PORT = 3000;

const isOldEnoughMiddleware=(req ,res , next)=>{
    // logic 
    const age = req.query.age;
    if(age > 14 ){
        next();
    }else{
        res.status(411).json({msg : "You are not old enough to ride"});
    }
}
// instead of calling this for every route we can wrute app.user( isOldEnoughMiddleware) , it tells that all the route below this line has to go through this check/ middleware before moving to next middleware
app.get('/ride1' ,isOldEnoughMiddleware , (req , res)=>{
    res.status(200).json({msg : "You have riden ride 1 successfully"});
})

app.get('/ride2' ,isOldEnoughMiddleware , (req , res)=>{
    res.status(200).json({msg : "You have riden ride 2 successfully"});
})

app.listen(PORT ,()=>{
    console.log(`Server is running ar ${PORT}`)
} ) 

