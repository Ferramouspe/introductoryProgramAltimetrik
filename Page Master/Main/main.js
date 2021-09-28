const urlAPI = "https://api.rawg.io/api/games?key=c692385ef58c4bc98d34e178c3e7c2ff&dates=2019-09-01,2019-09-30&platforms=18,1,7";

forFetch();

function changeImage(image){
    const imageForCard = document.getElementById("cardImageId");
    imageForCard.setAttribute('src', image)
}

function forFetch(){
    fetch(urlAPI).then((response) => response.json())
    .then(games => {
        changeImage(games.results[0].background_image)
    })
}










function switch3to1() {
        let enabled = "#515151";
        let disabled = "#303030";
        let columns3 = document.getElementById("columns3Id").style.backgroundColor = enabled;
        let column1 = document.getElementById("column1Id").style.backgroundColor = disabled;
}

function switch1to3() {
    let enabled = "#515151";
    let disabled = "#303030";
    let columns3 = document.getElementById("columns3Id").style.backgroundColor = disabled;
    let column1 = document.getElementById("column1Id").style.backgroundColor = enabled;
}