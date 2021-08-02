function seePassword(){
    var see= document.getElementById("loginPassword");
    if(see.type == "password"){
        see.type = "text";
        document.querySelector('.seePass').style.backgroundImage = "url(css/hidepass.svg)";
    }else{
        see.type = "password";
        document.querySelector('.seePass').style.backgroundImage = "url(css/showpass.svg)";
    }
}

