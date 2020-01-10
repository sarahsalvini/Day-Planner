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
// swith previous hours to past class, upcoming hours to future class


// changing textarea color based on time of day 
function changeColor() {
    let currentDay = new Date();
    let currentTime = currentDay.getHours();

if (currentTime < 9) {
    $("textarea").addClass("future");
}
else if (currentTime === 9) {
    $("textarea").addClass("future");
    $("#9text").removeClass("future");
    $("#9text").addClass("present");
}
else if (currentTime === 10) {
    $("#9text").removeClass("present");
    $("#9text").addClass("past");
    $("#10text").removeClass("future");
    $("#10text").addClass("present");
    $("#11text, #12text, #13text, #14text, #15text, #16text, #17text").addClass("future")
}
else if (currentTime === 11) {
    $("#10text").removeClass("present");
    $("#9text, #10text").addClass("past");
    $("#11text").removeClass("future");
    $("#11text").addClass("present");
    $("#12text, #13text, #14text, #15text, #16text, #17text").addClass("future")
}
else if (currentTime === 12) {
    $("#11text").removeClass("present");
    $("#9text, #10text, #11text").addClass("past");
    $("#12text").removeClass("future");
    $("#12text").addClass("present");
    $("#13text, #14text, #15text, #16text, #17text").addClass("future")
}
else if (currentTime === 13) {
    $("#12text").removeClass("present");
    $("#9text, #10text, #11text, #12text").addClass("past");
    $("#13text").removeClass("future");
    $("#13text").addClass("present");
    $("#14text, #15text, #16text, #17text").addClass("future")
}
else if (currentTime === 14) {
    $("#13text").removeClass("present");
    $("#9text, #10text, #11text, #12text, #13text").addClass("past");
    $("#14text").removeClass("future");
    $("#14text").addClass("present");
    $("#15text, #16text, #17text").addClass("future")
}
else if (currentTime === 15) {
    $("#14text").removeClass("present");
    $("#9text, #10text, #11text, #12text, #13text, #14text").addClass("past");
    $("#15text").removeClass("future");
    $("#15text").addClass("present");
    $("#16text, #17text").addClass("future")
}
else if (currentTime === 16) {
    $("#15text").removeClass("present");
    $("#9text, #10text, #11text, #12text, #13text, #14text, #15text").addClass("past");
    $("#16text").removeClass("future");
    $("#16text").addClass("present");
    $("#17text").addClass("future")
}
else if (currentTime === 17) {
    $("#16text").removeClass("present");
    $("#9text, #10text, #11text, #12text, #13text, #14text, #15text, #16text").addClass("past");
    $("#17text").removeClass("future");
    $("#17text").addClass("present");
}
else if (currentTime > 17) {
    $("#17text").removeClass("present");
    $("#9text, #10text, #11text, #12text, #13text, #14text, #15text, #16text, #17text").addClass("past");
}}

setInterval(changeColor, 1000)





// saving textarea input to local storage
$(".saveBtn").on("click", function() {
    let input = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, input)
})



// pull users input from local storage
let userInput9 = localStorage.getItem("time-9");
$("#9text").text(userInput9);

let userInput10 = localStorage.getItem("time-10");
$("#10text").text(userInput10);

let userInput11 = localStorage.getItem("time-11");
$("#11text").text(userInput11);

let userInput12 = localStorage.getItem("time-12");
$("#12text").text(userInput12);

let userInput13 = localStorage.getItem("time-13");
$("#13text").text(userInput13);

let userInput14 = localStorage.getItem("time-14");
$("#14text").text(userInput14);

let userInput15 = localStorage.getItem("time-15");
$("#15text").text(userInput15);

let userInput16 = localStorage.getItem("time-16");
$("#16text").text(userInput16);

let userInput17 = localStorage.getItem("time-17");
$("#17text").text(userInput17);


// clear day planner button
$("#clearBtn").click(function(){
    $("#9text, #10text, #11text, #12text, #13text, #14text, #15text, #16text, #17text").val("");
    localStorage.clear();
});



})