imagesCarrousel();

function seePassword(){
    var see = document.getElementById("loginPassword");
    if(see.type == "password") {
        see.type = "text";
        document.querySelector('.seePass').style.backgroundImage = "url(css/hidepass.svg)";
        return;
    }
    see.type = "password";
    document.querySelector('.seePass').style.backgroundImage = "url(css/showpass.svg)";
}

function imagesCarrousel(){
    let carrouselImages = document.querySelector(".carrouselImages");
    let point = document.querySelectorAll(".point");
    let circle = document.querySelectorAll(".circleSVG");
    const movement = -14.2857143;

    point.forEach( (eachPoint , i) =>{
        point[i].addEventListener("click", ()=>{
            let position = i;
            let operation = position * movement;

            carrouselImages.style.transform = `translateX(${operation}%)`;

            point.forEach( (eachPoint , i) =>{
                circle[i].classList.remove("active");
            })
            circle[i].classList.add("active");
        })
    })
}

function automaticCarrousel(){
    
}