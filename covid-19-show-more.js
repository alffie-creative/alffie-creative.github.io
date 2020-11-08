var showMoreOnOffCounter = 1;
var showMore = document.querySelector("#covid-19-show-more");

showMore.onclick = covid19ShowMoreLess;

// Disable the left button
function covid19ShowMoreLess() {
    showMoreOnOffCounter ++;
    console.log("hello");

    if (showMoreOnOffCounter%2 == 0){
        document.querySelector(".covid-19-text-container").style.height = "100%";
        showMore.innerHTML = "Show less"
        document.querySelector(".fadeout").style.display = "none";
    } else {
        document.querySelector(".covid-19-text-container").style.height = "300px";
        showMore.innerHTML = "Show more"
        document.querySelector(".fadeout").style.display = "block";
    };
};