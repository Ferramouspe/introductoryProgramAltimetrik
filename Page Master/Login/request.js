// document.addEventListener("load", onLoad);

// function onLoad(){
document.getElementById("loginButtonId").addEventListener("click", validLogin);
// }
async function validLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    let email = document.getElementById("loginUsername").value;
    const emailRegEx = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+[a-zA-Z]*$/;
    let password = document.getElementById("loginPassword").value;
    const passRegEx = /^[a-zA-Z0-9.-]{3,16}$/;
    
    let emailValidation = emailRegEx.test(email.value);
    let passValidation = passRegEx.test(password.value); 
    if(true){
        let fetchResponse = await fetch("http://localhost:3000/users", {method: "GET", mode: "cors", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"email": email, "password": password})});
        let jsonResponse = await fetchResponse.json();

        if(jsonResponse.status === 200 || 201){
        /*  document.cookie = "authTocken-" + jsonResponse.accessToken; */
            /* window.location = "../Main/main.html"; */
            console.log("entra");
            return;
        }
        noUser();
        return;
    }
    console.log("no entra");
}

function noUser(){
    console.log("No Entraste Man");
}