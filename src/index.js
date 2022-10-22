const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsYear = document.querySelector(".details-year");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    detailsYear.innerHTML = anchor.getAttribute("data-details-year");
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        showDetails();
        setDetails(anchors[i]);                
    })
}
function showDetails() {
    mainClass.classList.remove(HIDDEN);
}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}