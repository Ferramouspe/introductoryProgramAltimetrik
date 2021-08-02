function seePassword(){
    var see= document.getElementById("loginPassword");
    if(see.type == "password"){
        see.type = "text";
    }else{
        see.type = "password";
    }
}

