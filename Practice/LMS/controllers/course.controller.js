
//create course
export const createCourse = async(req ,res)=>{
    try{
        const {title , description , price , teacherId} =  req.body;

        const Teacher  = await Teacher.findById(teacherId);
        if(!Teacher) return res.status(400).json({msg : "Teacher does not exist"});

        const isCourse =  await Course.findOne({
            title :  title,
            teacher : teacherId
        }) 
        if(isCourse) return res.status(400).json({msg : "Course already exist"});

        const course =  await Course.create({
            title,
            description,
            price,
            teacher : teacherId
        })

        Teacher.courses.push(course);
        await Teacher.save();
        res.status(201).json(course);
    }catch(err){
        console.log(err)
        res.status(500).json({msg : "Error in creating course"});
    }
}


//

export const addLecture = async(req ,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(401).json({msg : "Error in adding a lecture"});
    }
}

//

export const getCourses = async(req ,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(401).json({msg : "Error in getting a course"});
    }
}


//

export const enrollInCourse = async(req ,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(401).json({msg : "Error in enrolling a courses"});
    }
}
