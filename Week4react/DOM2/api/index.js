const express = require('express')
const cors =  require('cors')
const app = express();
const port =  8800;


// 
app.use(cors())
app.get('/interest', (req ,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time =  parseInt(req.query.time);

    const interest = (principal * rate * time)/100;

    res.send(interest.toString());
})

app.listen(port , ()=>{
    console.log(`Serving is runnig at ${port}`)
})