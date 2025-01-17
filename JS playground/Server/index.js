const express = require('express')
const cors = require('cors')
const port = 3000
const app = express()

// middlewrare
app.use(express.json())
app.use(cors());
// routes
app.get('/getData' , async(req , res)=>{
    try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos/");
        const result = await response.json();
        console.log("length" , result.length)
        res.status(200).json(result);
    }catch(err){
        console.log(err)
        res.status(500).json({msg : "server error"});
    }
})

// get data of a specific user
app.get('/getUserData' , async(req,res)=>{
    try{
        const id = (req.query.id);
        console.log(typeof(id));
        // fetch the data
        const response =  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const result = await response.json();
        
        if(!result){
            return res.status(404).json({msg :"user not found"});
        }
        console.log(result)
        res.status(200).json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({ msg : "server error"});
    }
})

// listen
app.listen(port , ()=>{
    console.log("Server is running at 3000");
})