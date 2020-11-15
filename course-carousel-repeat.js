var positionCounter = 0;
var translateXamount = 318;
var translateXcounter = 0;


var coursesLeft = document.querySelector("#course-left");
var coursesRight = document.querySelector("#course-right");
var allCourses = document.querySelectorAll(".course-container");

coursesLeft.onclick = moveCoursesLeft;
coursesRight.onclick = moveCoursesRight;


function moveCoursesLeft(){
    positionCounter ++;
    translateXcounter += translateXamount;
    console.log(positionCounter);
    console.log(translateXcounter);
    moveCourses();
};

function moveCoursesRight(){
    positionCounter --;
    translateXcounter -= translateXamount;
    console.log(positionCounter);
    console.log(translateXcounter);
    moveCourses();
};

function moveCourses(){

    if (positionCounter == 14){

        // Reset
        positionCounter = 0;
        translateXcounter = 0;

        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#c9c8d3";

        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(0px)";
            allCourses[i].style.opacity = "1";
        };
    };

    if (positionCounter == 13){
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 1; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 1) + "px)";
        };
    };

    if (positionCounter == 12){
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 2; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 2) + "px)";
        };
    };

    if (positionCounter == 11){
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 3; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 3) + "px)";
        };
    };

    if (positionCounter == 10){
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 4; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 4) + "px)";
        };
    };

    if (positionCounter == 9){
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 5; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 5) + "px)";
        };
    };

    if (positionCounter == 8){
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 6; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 6) + "px)";
        };
    };

    if (positionCounter == 7){
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 7; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 7) + "px)";
        };
    };

    if (positionCounter == 6){
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < 9; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 8; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 8) + "px)";
        };
    };

    if (positionCounter == 5){
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < 10; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
            };
        for (var i = 9; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 9) + "px)";
            };
        };

    if (positionCounter == 4){
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 10; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 10) + "px)";
            };
    };

    if (positionCounter == 3){
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 11; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 11) + "px)";
            };
    };

    if (positionCounter == 2){
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 12; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 12) + "px)";
            };
    };

    if (positionCounter == 1){
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 13; i < 14; i++) {
            allCourses[i].style.transform = "translateX(" + (-translateXamount * 13) + "px)";
            };
    };

    if(positionCounter == 0){
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(0px)";
        };
    };

    if(positionCounter == -1){
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
    };

    if(positionCounter == -2){
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#c9c8d3";
        for (var i = 0; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
    };

    if(positionCounter == -3){
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(3)').style.backgroundColor = "#c9c8d3";
        for (var i = 2; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 2; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 11) + "px)";
        };
    };

    if(positionCounter == -4){
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(4)').style.backgroundColor = "#c9c8d3";
        for (var i = 3; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 3; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 10) + "px)";
        };
    };

    if(positionCounter == -5){
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(5)').style.backgroundColor = "#c9c8d3";
        for (var i = 4; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 4; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 9) + "px)";
        };
    };

    if(positionCounter == -6){
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(6)').style.backgroundColor = "#c9c8d3";
        for (var i = 5; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 5; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 8) + "px)";
        };
    };

    if(positionCounter == -7){
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(7)').style.backgroundColor = "#c9c8d3";
        for (var i = 6; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 6; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 7) + "px)";
        };
    };

    if(positionCounter == -8){
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(8)').style.backgroundColor = "#c9c8d3";
        for (var i = 7; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 7; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 6) + "px)";
        };
    };

    if(positionCounter == -9){
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(9)').style.backgroundColor = "#c9c8d3";
        for (var i = 8; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 8; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 5) + "px)";
        };
    };

    if(positionCounter == -10){
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(10)').style.backgroundColor = "#c9c8d3";
        for (var i = 9; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 9; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 4) + "px)";
        };
    };

    if(positionCounter == -11){
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(11)').style.backgroundColor = "#c9c8d3";
        for (var i = 10; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 10; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 3) + "px)";
        };
    };

    if(positionCounter == -12){
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(12)').style.backgroundColor = "#c9c8d3";
        for (var i = 11; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 11; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 2) + "px)";
        };
    };

    if(positionCounter == -13){
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(13)').style.backgroundColor = "#c9c8d3";
        for (var i = 12; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 11; i++) {
            allCourses[i].style.transform = "translateX(" + (translateXamount * 1) + "px)";
        };
    };

    if(positionCounter == -14){
        document.querySelector('.dot:nth-child(2)').style.backgroundColor = "#c9c8d3";
        document.querySelector('.dot:nth-child(1)').style.backgroundColor = "#1FCED1";
        document.querySelector('.dot:nth-child(14)').style.backgroundColor = "#c9c8d3";
        for (var i = 12; i < allCourses.length; i++) {
            allCourses[i].style.transform = "translateX(" + translateXcounter + "px)";
        };
        for (var i = 0; i < 11; i++) {
            allCourses[i].style.transform = "translateX(0px)";
            // Reset
            positionCounter = 0;
            translateXcounter = 0;
        };
    };
};
