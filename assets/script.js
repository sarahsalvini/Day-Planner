$(document).ready(function(){

    let = timeOfDay();

// displaying date on heading
function timeOfDay() {
$("#currentDay").text(moment().format('MMMM Do YYYY HH:mm:ss'))
    setInterval(timeOfDay, 1000)
};

// // pseudo code:
// 1. change colors of container based on time of day 
// 2. save information to local storage 
// 3. pulls information from local storage 

// create variable for current time with moment.js

// if current time < planner time set future  
// else current time === planner time set present 
// else current time > planner time set past 


function changeColor() {
    let currentDay = new Date();
    let currentTime = currentDay.getHours();

if (currentTime < 9) {
    $("textarea").addClass("future");
} 
else (currentTime === 9); {
    $("textarea").addClass("future");
    $("textarea").removeClass("future");
    $("textarea").addClass("present");
}

}

setInterval(changeColor, 1000)




})