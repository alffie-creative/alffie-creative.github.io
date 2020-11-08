var selectAlert = document.querySelector("#alert-above-nav");

function hideAlert(){
    selectAlert.style.display = "none";
    document.querySelector("#top-image-container").style.marginTop = "70px";
}

selectAlert.onclick = hideAlert;
