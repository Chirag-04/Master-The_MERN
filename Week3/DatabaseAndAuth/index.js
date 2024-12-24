import express from "express"
import userRoute from "./routes/user.route.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/' , (req , res)=>{
    res.json({
        msg : "Working"
    })
})

app.use('/api/users', userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})