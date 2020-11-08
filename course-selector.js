var counter = 0;
var translateXammount = 326.5;
var translateXcounter = 0;


var courseLeft = document.querySelector("#course-left");
var courseRight = document.querySelector("#course-right");
var courseContainer = document.querySelector(".course-container");

courseLeft.onclick = moveCourseLeft;
courseRight.onclick = moveCourseRight;

// Disable the left button
function courseLeftDisabled() {
    document.getElementById("course-left").disabled = true;
    document.getElementById("course-left").style.backgroundColor = "grey";
};

function moveCourseLeft(){
    counter --;
    translateXcounter += translateXammount;
    courseContainer.style.transform = "translateX(" + translateXcounter + "px)";
    document.getElementById("course-right").style.backgroundColor = "#1FCED1";
    document.getElementById("course-right").disabled = false;
    if (counter == 0){
        courseLeftDisabled();
    };


};

function moveCourseRight(){
    counter ++;
    translateXcounter -= translateXammount;
    courseContainer.style.transform = "translateX(" + translateXcounter + "px)";
    document.getElementById("course-left").style.backgroundColor = "#1FCED1";
    document.getElementById("course-left").disabled = false;

    if(counter <= 12){
        document.getElementById("course-right").disabled = false;
        document.getElementById("course-left").disabled = false;
    } else if (counter == 13) {
        document.getElementById("course-right").disabled = true;
        document.getElementById("course-right").style.backgroundColor = "grey";
    };

};

// The left button is disabled by default. It is enabled as soon the user clicks the right button.
courseLeftDisabled();