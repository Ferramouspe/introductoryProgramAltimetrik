function validLogin() {
    let email = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");
    fetch("http://localhost:3000/login", {method: "post", mode: "cors", 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({"email": email, "password": password})}).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
    return false;
}