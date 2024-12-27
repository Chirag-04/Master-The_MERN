
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)
function rateLimitTheuser(req ,res , next){
    const userId = (req.headers["user-id"]);
    // i need to check whether this user exist or not
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId]+=1;

        // if it is the six request
        // i need to block 
        if(numberOfRequestsForUser[userId] > 5){
            res.status(404).json({msg : "Time out due to excesssive request"});
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser[userId] = 1;
        next();
    }
}
app.use(rateLimitTheuser);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;