export const register = async(req , res)=>{
    const username =  req.username;
    const email =  req.email;
    const password = req.password;
    try{
        const hashedPassword = await bcrypt.hash(password , 10); // salting 

        // create a user
        const newUser =  await prisma.User.create({
            username,
            email,
            password :  hashedPassword
        })

        res.status(200).json({msg : "User created"});
    }catch(err){
        console.log("error in register route" , err);
        res.status(201).json({msg : "Failed to create user"})
    }
}


export const login =async(req , res)=>{
    const username =  req.body.username;
    const password =  req.body.password;
    try{
        const user  = await prisma.user.findUnique({
            where : {username}
        })

        if(!user){
            return res.status(401).json({msg : "user does not exist"});
        }

        const isPassword = await bcrypt.compare(password , user.password);

        if(!isPassword) return res.status(401).json({msg : "Invalid password"});

        // valid user 

        const age  = 7 *  24 * 60 * 60 * 1000
        const token = jwt.sign(
            {id: user.id} , JWT_SECRET_KEY,
            {expiresIn : age}
        )

   
        const { password: _, ...data } = user;

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            secure: process.env.NODE_ENV === "production",
        });

        return res.status(200).json(data);

    }catch(err){
        console.log("error in login api " , err);
        return res.status(500).json({msg : "Failed to create user"}); 
    }
}


export const logout= async(req , res)=>{
    res.clearCookie("token").status(200).json({
        msg : "logout successfully"
    })
}
