// creating our own async function 
// we can use an existing function

function sayDone(){
    console.log("done");
}

// function chiragSetTimeout(fn , duration){
//     // setTimeout(function , duration)
//     setTimeout(fn , duration);
// }
// chiragSetTimeout(sayDone , 5000);


// function chiragSetTimeoutPromise(){
//     let p = new Promise(function(resolve , reject){
//         // after 2 sec i want to resolve this promise 
//         reject("rejected promises")
//         setTimeout(resolve , 2000);
//     })
//     return p;
// }

// chiragSetTimeoutPromise(sayDone)
// .then(()=>{
//     console.log("using promises")
// })
// .catch((err)=>{
//     console.log(err);
// })


// creating a promise 
function demoPromise(){
    let p = new Promise(function(resolve , reject){
        // api call 
        let isSuccess = false;
        if(isSuccess){
            resolve("api executed successfully")
        }else{
            reject("error occured ")
        }
    })
    return p;
}

// calling a promise
demoPromise()
.then((data)=>console.log(data))
.catch((err)=>console.log(err));
