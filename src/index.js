const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsYear = document.querySelector(".details-year");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const detailsSound = document.querySelector(".details-sound");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    detailsYear.innerHTML = anchor.getAttribute("data-details-year");
    detailsSound.setAttribute("src", anchor.getAttribute("data-details-sound"));
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        showDetails();
        setDetails(anchors[i]);                
    })
}

function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
        },1);  
    setTimeout(function(){
        detailsSound.setAttribute("src", null);
    },3500);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}