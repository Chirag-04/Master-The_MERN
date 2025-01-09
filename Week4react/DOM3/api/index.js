const express = require('express')
const cors = require('cors')
const app = express();
const port = 8800;


app.use(cors())
app.use(express.json());


const todos = [
    { id: 1, title: "Sample Todo 1", description: "Description for Todo 1" },
    { id: 2, title: "Sample Todo 2", description: "Description for Todo 2" },
    { id: 3, title: "gym jao bhailog", description: "gym 6-7" },
];
app.get('/todos' , (req ,res)=>{
    res.json(todos)
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})