const express = require('express')
const cors = require('cors');
const app = express();
const port = 8800

app.use(cors()); // cross origin 
app.get('/sum' , (req ,res)=>{
    const a =  parseInt(req.query.a);
    const b =  parseInt(req.query.b);
    const sum = a-b ;
    console.log(sum);
    res.send(sum.toString());
})

app.listen(port , ()=>{
    console.log(`Server runnig at ${port}`);
})