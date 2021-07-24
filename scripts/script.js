let heading = document.querySelector("#heading");
let topBackgroundPattern = document.querySelector("#top-background-pattern");
let body = document.querySelector("#body");
let socialStat = document.querySelectorAll(".social-stat");
let socialMediaName = document.querySelectorAll(".social-media-name");
let followersNum = document.querySelectorAll(".followers-num");
let headingOverview = document.querySelector("#heading-overview");
let todayStat = document.querySelectorAll(".today-stat");
let todayStatLeftText = document.querySelectorAll(".today-stat-left-text");
let todayStatLeftNumber = document.querySelectorAll(".today-stat-left-number");
let attribution = document.querySelector(".attribution");


let toggleButton = document.querySelector("#toggle");
let toggleCircle = document.querySelector("#circle");
toggleButton.addEventListener("click", function(){
    toggleButton.classList.toggle("toggle-light-theme");
    toggleCircle.classList.toggle("circle-light-theme");

    heading.classList.toggle("heading-light-theme")
    topBackgroundPattern.classList.toggle("top-background-light-theme");
    body.classList.toggle("body-light-theme");
    socialStat.forEach(function(elem) {
        elem.classList.toggle("social-stat-light-theme");
    });
    socialMediaName.forEach(function(elem) {
        elem.classList.toggle("social-media-name-light-theme");
    })
    followersNum.forEach(function(elem) {
        elem.classList.toggle("followers-num-light-theme");
    })  
    headingOverview.classList.toggle("heading-overview-light-theme");
    todayStat.forEach(function(elem){
        elem.classList.toggle("today-stat-light-theme");
    })
    todayStatLeftText.forEach(function(elem){
        elem.classList.toggle("today-stat-left-text-light-theme");
    })
    todayStatLeftNumber.forEach(function(elem){
        elem.classList.toggle("today-stat-left-number-light-theme");
    })
    attribution.classList.toggle("attribution-light-theme")
});