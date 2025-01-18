
async function apiCall(){
    const response =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await response.json();
    console.log(data);
    createCard(data);
}



function createCard(users){
    const parentElement =  document.createElement("div")
    parentElement.className = "card-container"

    // creating childs
    users.forEach(user =>{
        const childElement = document.createElement("div")
        childElement.className = "card"
        childElement.innerHTML = `
        <h2>Username :${user.name}</h2>
        <h2>Email ID : ${user.email}</h2>
        `
        parentElement.appendChild(childElement)
    })
    document.body.appendChild(parentElement)
}


apiCall();
