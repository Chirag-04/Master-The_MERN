// ssr
import { json } from 'body-parser';
import { express } from 'express';

const app = express();

// SSR
// demo databases of uses
// '/users' = SSR  (Client dependent api)
// '/api/users' => sending raw data as respinse
app.use(express.json());
app.get('/users' , function(req , res){
    const htmlDocumet = `
    <ul>
    ${users.map((user)=>{
        <li>${user.first_name}</li>
        })}
    </ul>
    `
    res.send(htmlDocumet);
})

app.get('/api/users' ,()=>{
    // api 
    res.json(users);
})

app.get('/api/users/:id' , function(req ,res){
    const userID = req.params.id;
    if(Number(userID) > users.length){
        return res.status().json({
            msg :"user does not exist"
        })
    }
    //

    let userDetail;
    for(let i=0 ; i<users.length ; i++){
        if(userID === users[i].id);// todo
    }

})

function isOldMiddleware(req, res , next){
    const age = req.query.age;
    if(age <= 14 ){ // .1
        return res.status(411).json({msg : "You are not old enough"}) // .2 
    }else{
        next(); // call the next middleware function
    }
}