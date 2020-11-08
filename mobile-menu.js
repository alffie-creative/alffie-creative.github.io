var mobileMenuOnOffCounter = 1;
var mobileMenu = document.querySelector("#mobile-menu-button");

mobileMenu.onclick = openCloseMobileMenu;

// Disable the left button
function openCloseMobileMenu() {
    mobileMenuOnOffCounter ++;
    if (mobileMenuOnOffCounter%2 == 0){
        // document.getElementById("mobile-menu").style.transform = "translateX(300px)";
        document.getElementById("mobile-menu").style.transition = "0.3s";
        document.getElementById("mobile-menu").style.display = "flex";
    } else {
	    document.getElementById("mobile-menu").style.display = "none";
        // document.getElementById("mobile-menu").style.transform = "translateX(-300px)";
        document.getElementById("mobile-menu").style.transition = "0";
    };
};