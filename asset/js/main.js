console.log("Test"); //Test if linked
var doubleArrows = 1; //Used as a global var for switching double arrows

//Overlay
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}
//end

//Overlay Arrows
function navigationArrows() {
    if (doubleArrows === 1) {
        doubleArrows = 0;
        document.getElementById("navigation-arrow__right").style.display = "none";
        document.getElementById("navigation-arrow__left").style.display = "block";
    } else if (doubleArrows === 0) {
        doubleArrows = 1;
        document.getElementById("navigation-arrow__right").style.display = "block";
        document.getElementById("navigation-arrow__left").style.display = "none";
    }
}
//end
