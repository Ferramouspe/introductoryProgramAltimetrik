document.getElementById("loginButtonId").addEventListener("click", validLogin);

function validLogin() {
    let email = document.getElementById("loginUsername").value;
    const emailRegEx = /^[a-zA-Z0-9\.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+[a-zA-Z]*$/;
    let password = document.getElementById("loginPassword").value;
    const passRegEx = /^[a-zA-Z0-9\.-]{3,16}$/;
    
    let emailValidation = emailRegEx.test(email);
    let passValidation = passRegEx.test(password); 
    if(emailValidation && passValidation) {
        fetch("http://localhost:3000/login", {method: "POST", mode: "cors", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"email": email, "password": password})})
        .then( (response) => {
            if(response.status === 200 || response.status === 201){
                response.json().then( (responseJson) => { 
                    window.sessionStorage.setItem("token",responseJson.accessToken);
                    window.location = "../main/main.html";
                })   
            }else noUser();
        })
    }
}

function noUser(){
    console.log("Invalid User");
}