const urlAPI = "https://api.rawg.io/api/games?key=c692385ef58c4bc98d34e178c3e7c2ff&dates=2019-09-01,2019-09-30&platforms=18,1,7";

forFetch();

function forFetch(){
    fetch(urlAPI).then((response) => response.json())
    .then(games => {
        console.log(games);
        repeatCards(games);
    })
}

function showGenres(gamesInfo){
    let genre = gamesInfo.genres;
    let genreActual = "";
    for (let j=0; j<genre.length; j++) {
        genreActual += genre[j].name;
        if(j != genre.length-1 ){
            genreActual += ',';
        }
    }
    return genreActual;
}

function repeatCards(gamesInfo) {
    let cardContainer = document.querySelector(".cardContainer");

    for(let i=0; i<gamesInfo.results.length; i++){
        let cardInfo = gamesInfo.results[i];
        let card = `  <div class="card cardFlex" onclick="cardModal(${cardInfo.id})">
        <div class="cardImage">
            <image id="cardImageId" src='${cardInfo.background_image}'>
        </div>
        <div class="underCardImage">
            <div class="leftPartCard">
                <div class="forName">
                    <h3 id="gameName">${cardInfo.name}</h3>
                </div>
                <div class="releaseDateDiv">
                    <div>
                        <h4 class="releaseDate">Release Date</h4>
                    </div>
                    <div>
                        <h4 id="releaseDateId">${cardInfo.released}</h4>
                    </div>
                </div>
                <hr class="cardLine">
                <div class="genreDiv">
                    <div>
                        <h4 class="genre">Genre</h4>
                    </div>
                    <div>
                        <h4 id="genreId">${showGenres(cardInfo)}</h4>
                    </div>
                </div>
                <hr class="cardLine">
            </div>
            <div class="rightPartCard"> 
                <div class="consols">
                    <svg width="60" height="13" viewBox="0 0 60 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M59.9692 5.95833H52.9276V0.998704L59.9692 0V5.95833ZM52.3859 1.08333V5.95833H46.9692V1.80612L52.3859 1.08333ZM52.3859 6.5H46.9692V11.1145L52.3859 11.9167V6.5ZM52.9276 11.912V6.5H59.9692V13L52.9276 11.912Z" fill="white"/>
                        <path d="M6.46924 0.149317L6.46924 12.0296L9.04879 12.8818L9.04879 2.92038C9.04879 2.45098 9.24948 2.13932 9.57136 2.2465C9.99224 2.36823 10.074 2.80063 10.074 3.2648L10.074 7.24326C11.6797 8.05369 12.9438 7.24283 12.9438 5.10456C12.9438 2.91953 12.2026 1.94614 10.0219 1.16352C9.16173 0.864854 7.5676 0.360857 6.46924 0.149317Z" fill="white"/>
                        <path d="M9.71924 11.1429L13.6185 9.45771C14.0596 9.25915 14.127 8.9894 13.77 8.84764C13.4074 8.70325 12.7602 8.74457 12.3144 8.93895L9.71924 10.0506V8.27688L9.86785 8.21729C9.86785 8.21729 10.619 7.89415 11.6756 7.75502C12.7301 7.61465 14.0234 7.77328 15.0398 8.2385C16.1848 8.68019 16.3132 9.32446 16.0235 9.77281C15.7296 10.2165 15.017 10.5375 15.017 10.5375L9.71924 12.8484" fill="white"/>
                        <path d="M1.15806 11.3389C-0.0588367 10.9683 -0.261764 10.1851 0.293379 9.73273C0.805452 9.31962 1.67754 9.00863 1.67754 9.00863L5.28253 7.60333L5.28253 9.20276L2.69072 10.2185C2.23162 10.398 2.16279 10.6507 2.53258 10.7828C2.90897 10.9203 3.57694 10.8834 4.0363 10.698L5.28253 10.2068V11.6346C5.2022 11.6494 5.11289 11.6642 5.03138 11.6794C3.78885 11.9049 2.46507 11.8123 1.15806 11.3389Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0959 12.7978C15.9934 12.8989 15.859 12.9561 15.7143 12.9561C15.5695 12.9561 15.4307 12.8989 15.3282 12.7978C15.2269 12.6948 15.1709 12.5603 15.1709 12.4154C15.1709 12.1153 15.4138 11.8727 15.7143 11.8727C15.859 11.8727 15.9934 11.928 16.0959 12.0314C16.1971 12.1324 16.2542 12.2692 16.2542 12.4154C16.2542 12.5603 16.1971 12.6948 16.0959 12.7978ZM15.2622 12.4154C15.2622 12.292 15.3084 12.1788 15.3927 12.095C15.4791 12.0092 15.5944 11.963 15.7143 11.963C15.8342 11.963 15.9466 12.0092 16.031 12.095C16.1161 12.1788 16.162 12.292 16.162 12.4154C16.162 12.6627 15.961 12.8634 15.7143 12.8634C15.5944 12.8634 15.4791 12.8177 15.3927 12.7331C15.3084 12.6477 15.2622 12.5358 15.2622 12.4154ZM15.9615 12.6405C15.9663 12.6544 15.9722 12.6627 15.9805 12.6651L15.9881 12.6694V12.7038H15.8706L15.8684 12.6969L15.8603 12.6761C15.859 12.6651 15.8574 12.6508 15.8559 12.6267L15.8506 12.5325C15.8493 12.4991 15.8384 12.4796 15.8182 12.4667C15.8032 12.4617 15.7828 12.4579 15.7524 12.4579H15.5892V12.7038H15.4821V12.0997H15.7629C15.8087 12.0997 15.8472 12.1078 15.8768 12.1204C15.9359 12.1482 15.9663 12.1984 15.9663 12.269C15.9663 12.3037 15.9577 12.3362 15.9429 12.3601C15.93 12.377 15.9148 12.3924 15.8983 12.4075L15.9027 12.4106C15.9139 12.4185 15.925 12.4263 15.9316 12.4378C15.9465 12.4543 15.9533 12.482 15.9545 12.5177L15.9572 12.5946C15.9577 12.6143 15.9593 12.6296 15.9615 12.6405ZM15.8348 12.3435C15.8522 12.3323 15.8603 12.31 15.8603 12.276C15.8603 12.2401 15.848 12.2162 15.8236 12.2042C15.8087 12.1984 15.7901 12.1942 15.7652 12.1942H15.5892V12.3639H15.7555C15.7885 12.3639 15.8148 12.3571 15.8348 12.3435Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4692 0C33.7228 0 34.7597 0.40056 35.7038 1.07423C35.7192 1.07423 35.7192 1.09244 35.7192 1.11064C35.7192 1.12885 35.7038 1.12885 35.6883 1.12885C34.4811 0.819328 32.655 2.03922 32.4847 2.16667H32.4692H32.4538C32.2835 2.03922 30.4573 0.819328 29.2502 1.12885C29.2347 1.12885 29.2192 1.12885 29.2192 1.11064C29.2192 1.09244 29.2192 1.07423 29.2347 1.07423C30.1788 0.40056 31.2157 0 32.4692 0ZM36.623 11.4392C37.5979 10.4302 34.3743 6.86712 32.4715 5.41667C32.4715 5.41667 32.4558 5.41667 32.4558 5.43243C30.5688 6.86712 27.3294 10.4302 28.3201 11.4392C29.4209 12.4167 30.8833 13 32.4715 13C34.0598 13 35.5065 12.4167 36.623 11.4392ZM27.7501 2.19751C27.7426 2.19751 27.7389 2.20158 27.7352 2.20566C27.7315 2.20973 27.7278 2.2138 27.7204 2.2138C26.637 3.40327 25.9692 5.04896 25.9692 6.8576C25.9692 8.34035 26.4293 9.72534 27.1861 10.817C27.1861 10.8333 27.201 10.8333 27.2158 10.8333C27.2307 10.8333 27.2307 10.817 27.2158 10.8007C26.7558 9.25282 29.0857 5.52149 30.2877 3.95726L30.3026 3.94097C30.3026 3.93257 30.3026 3.9285 30.3005 3.92653C30.2986 3.92467 30.2949 3.92467 30.2877 3.92467C28.4624 1.93681 27.8539 2.14863 27.7501 2.19751ZM34.6359 3.93424L34.6507 3.91793C36.4761 1.94443 37.0845 2.15646 37.1736 2.18908C37.1797 2.18908 37.1833 2.18908 37.1865 2.19025C37.191 2.1919 37.1946 2.19586 37.2033 2.20539C38.3014 3.39602 38.9692 5.04332 38.9692 6.85372C38.9692 8.33792 38.5092 9.72426 37.7523 10.817C37.7523 10.8333 37.7375 10.8333 37.7227 10.8333V10.8007C38.1679 9.25127 35.8528 5.5163 34.6507 3.95055C34.6359 3.95055 34.6359 3.93424 34.6359 3.93424Z" fill="white"/>
                    </svg>
                </div>
                <div class="numberOfGame">
                    <h2 id="gameNumber">#${i+1}</h2>
                </div>
                <div class="forGift">
                    <svg class="plus" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.7832 4.41406H0.515625V3.13086H2.7832V0.845703H4.06641V3.13086H6.33398V4.41406H4.06641V6.66992H2.7832V4.41406Z" fill="white"/>
                    </svg>
                    <svg class="gift" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C3 1.11929 4.11929 0 5.5 0C6.88071 0 8 1.11929 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5V2.506C13 2.576 13 2.776 12.962 3H15C15.5523 3 16 3.44772 16 4V5C16 5.55228 15.5523 6 15 6H1C0.447715 6 0 5.55228 0 5V4C0 3.44772 0.447715 3 1 3H3.038C3.01159 2.83668 2.99888 2.67144 3 2.506V2.5ZM4.068 3H7V2.5C7 1.9641 6.7141 1.46891 6.25 1.20096C5.7859 0.933013 5.2141 0.933013 4.75 1.20096C4.2859 1.46891 4 1.9641 4 2.5C4 2.585 4.002 2.774 4.045 2.93C4.05101 2.95385 4.05869 2.97724 4.068 3ZM11.932 3H9V2.5C9 1.67157 9.67157 1 10.5 1C11.3284 1 12 1.67157 12 2.5C12 2.585 11.998 2.774 11.955 2.93C11.9489 2.95381 11.9412 2.9772 11.932 3ZM15 7V14.5C15 15.3284 14.3284 16 13.5 16H9V7H15ZM1 14.5C1 15.3284 1.67157 16 2.5 16H7V7H1V14.5Z" fill="white"/>
                    </svg>
                </div>
            </div>  
        </div>
    </div>`
        cardContainer.innerHTML += card;
    }
}



function switch3to1() {
        let enabled = "#515151";
        let disabled = "#303030";
        let card = document.querySelector(".card");
        let container = document.querySelector(".cardContainer");
        let columns3 = document.getElementById("columns3Id").style.backgroundColor = disabled;
        let column1 = document.getElementById("column1Id").style.backgroundColor = enabled;
        card.classList.add("cardFlex");
        container.classList.remove("cardGrid");
}

function switch1to3() {
    let enabled = "#515151";
    let disabled = "#303030";
    let card = document.querySelector(".card");
    let container = document.querySelector(".cardContainer");
    let columns3 = document.getElementById("columns3Id").style.backgroundColor = enabled;
    let column1 = document.getElementById("column1Id").style.backgroundColor = disabled;
    card.classList.remove("cardFlex");
    container.classList.add("cardGrid");
}


function cardModal(id){
        let modal = document.querySelector(".shadow");
        modal.style.display = "flex";
}
function cardModalNone(){
    let modal = document.querySelector(".shadow");
    modal.style.display = "none";
}