const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; // while encrption and decryption

// basis ogf auth
const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let isExist =  false;
  for(let i= 0 ; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
        isExist = true;
        break;
    }
  }
  return isExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  

  // if user exist
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  // so we will take the token and send it in the auth headers
  console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const decodedusername = decoded.username;
    // return a list of users other than this username
    res.json({
        users : ALL_USERS.filter((user)=> user.username == decodedusername)
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000 , ()=>{
    console.log("Server is running at 3000")
})
