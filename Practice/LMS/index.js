import express from "express"
import courseRouter from "./controllers/couse.controller";
const app = express();
const port = 3000;


app.use('/api/courses', courseRouter);

app.listen(port , ()=>{
    console.log("Server is runnig at 3000");
})