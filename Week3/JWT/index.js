const jwt = require("jsonwebtoken")
// generate 
// decode
// verify 

const value = {
    username : "Chirag Maini",
    password : 123123123
}

// generatig a token
const token = jwt.sign(value , "secret");

console.log("token" ,token);


// using this token anyone can decode the json 
// but to verify it they need secret password
// also it is advisable to exlude password field while generating a token



