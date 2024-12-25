//Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod  = require('zod');
// schema 
const mySchema =  zod.object({
    email :  zod.string().email(),
    username : zod.string(),
    password : zod.string().min(8)
})

//* 1. sign jwt
function signJwt(email , username , password){
    // we need to create a token encoding username 
    const response =  mySchema.safeParse({ email, username , password});
    console.log(response);

    if(response.success === false){
        console.log("Please enter the right credentials");
        return;
    }

    // valid credentials
    const token = jwt.sign({username}, jwtPassword);
    return token;
}


//* 2. verify jwt
function verifyJwt(token , password){

    jwt.verify(token, password , (err , decoded)=>{
        if(err){
            console.log("invalid user");
        }else{
            console.log("valid user");
        }
    })
}


//* 3. decode jwt
function decodJwt(){
    const decodedJson = jwt.decode(token);
    console.log(decodedJson);
}

const token = signJwt("abc@gmail.com","chiragMaini" , "3121213131");
console.log(token);

// verify token
verifyJwt(token , jwtPassword);