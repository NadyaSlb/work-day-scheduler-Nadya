var currentDay = $('#currentDay');
var currentDayM = moment();
var nineAm = $('#nineAm');
var tenAm = $('#tenAm');
var elevenAm = $('#elevenAm');
var twelvePm = $('#twelvePm');
var onePm = $('#onePm');
var twoPm = $('#twoPm');
var threePm = $('#threePm');
var fourPm = $('#fourPm');
var fivePm = $('#fivePm');
var textNine = $('#textNine');
var textTen = $('#textTen');
var textEleven = $('#textEleven');
var textTwelve = $('#textTwelve');
var textOne = $('#textOne');
var textTwo = $('#textTwo');
var textThree = $('#textThree');
var textFour = $('#textFour');
var textFive = $('#textFive');

//add current day to header
$(currentDay).text(currentDayM.format("dddd, MMMM Do"));

//add time to time-blocks
//Nine
$(nineAm).text(moment().set("hour", 9).format("hA"));
$('#btnNine').on("click", function(){
    var taskTextNine = $('#textNine').val();
    var TasksNine = [];
    TasksNine = {text: taskTextNine}
    localStorage.setItem("TasksNine", JSON.stringify(TasksNine));
});
var loadTasksNine = function() {
TasksNine = JSON.parse(localStorage.getItem("TasksNine"));
if (!TasksNine){
    TasksNine = [];
} else {
$(textNine).val(TasksNine.text);
}
};
var auditTasksNine = function(){
    var nineHour = moment().set("hour", 9);
    if (moment().isAfter(nineHour)) {
$(textNine).addClass("past");
}else if (moment().isBefore(nineHour)){
    $(textNine).addClass("future");
}else{
    $(textNine).addClass("present");
}};
auditTasksNine();

//Ten
$(tenAm).text(moment().set("hour", 10).format("hA"));
$('#btnTen').on("click", function(){
    var taskTextTen = $('#textTen').val();
    var TasksTen = [];
    TasksTen = {text: taskTextTen}
    localStorage.setItem("TasksTen", JSON.stringify(TasksTen));
});
var loadTasksTen = function() {
TasksTen = JSON.parse(localStorage.getItem("TasksTen"));
if (!TasksTen){
    TasksTen = [];
} else {
$(textTen).val(TasksTen.text);
}
};
var auditTasksTen = function(){
    var tenHour = moment().set("hour", 10);
    if (moment().isAfter(tenHour)) {
$(textTen).addClass("past");
}else if (moment().isBefore(tenHour)){
    $(textTen).addClass("future");
}else{
    $(textTen).addClass("present");
}};
auditTasksTen();

//Eleven
$(elevenAm).text(moment().set("hour", 11).format("hA"));
$('#btnEleven').on("click", function(){
    var taskTextEleven = $('#textEleven').val();
    var TasksEleven = [];
    TasksEleven = {text: taskTextEleven}
    localStorage.setItem("TasksEleven", JSON.stringify(TasksEleven));
});
var loadTasksEleven = function() {
TasksEleven = JSON.parse(localStorage.getItem("TasksEleven"));
if (!TasksEleven){
    TasksEleven = [];
} else {
$(textEleven).val(TasksEleven.text);
}
};
var auditTasksEleven = function(){
    var elevenHour = moment().set("hour", 11);
    if (moment().isAfter(elevenHour)) {
$(textEleven).addClass("past");
}else if (moment().isBefore(elevenHour)){
    $(textEleven).addClass("future");
}else{
    $(textEleven).addClass("present");
}};
auditTasksEleven();

//Twelve
$(twelvePm).text(moment().set("hour", 12).format("hA"));
$('#btnTwelve').on("click", function(){
    var taskTextTwelve = $('#textTwelve').val();
    var TasksTwelve = [];
    TasksTwelve = {text: taskTextTwelve}
    localStorage.setItem("TasksTwelve", JSON.stringify(TasksTwelve));
});
var loadTasksTwelve = function() {
TasksTwelve = JSON.parse(localStorage.getItem("TasksTwelve"));
if (!TasksTwelve){
    TasksTwelve = [];
} else {
$(textTwelve).val(TasksTwelve.text);
}
};
var auditTasksTwelve = function(){
    var twelveHour = moment().set("hour", 12);
    if (moment().isAfter(twelveHour)) {
$(textTwelve).addClass("past");
}else if (moment().isBefore(twelveHour)){
    $(textTwelve).addClass("future");
}else{
    $(textTwelve).addClass("present");
}};
auditTasksTwelve();

//One
$(onePm).text(moment().set("hour", 13).format("hA"));$(twelvePm).text(moment().set("hour", 12).format("hA"));
$('#btnOne').on("click", function(){
    var taskTextOne = $('#textOne').val();
    var TasksOne = [];
    TasksOne = {text: taskTextOne}
    localStorage.setItem("TasksOne", JSON.stringify(TasksOne));
});
var loadTasksOne = function() {
TasksOne = JSON.parse(localStorage.getItem("TasksOne"));
if (!TasksOne){
    TasksOne = [];
} else {
$(textOne).val(TasksOne.text);
}
};
var auditTasksOne = function(){
    var oneHour = moment().set("hour", 13);
    if (moment().isAfter(oneHour)) {
$(textOne).addClass("past");
}else if (moment().isBefore(oneHour)){
    $(textOne).addClass("future");
}else{
    $(textOne).addClass("present");
}};
auditTasksOne();

//Two
$(twoPm).text(moment().set("hour", 14).format("hA"));
$('#btnTwo').on("click", function(){
    var taskTextTwo = $('#textTwo').val();
    var TasksTwo = [];
    TasksTwo = {text: taskTextTwo}
    localStorage.setItem("TasksTwo", JSON.stringify(TasksTwo));
});
var loadTasksTwo = function() {
TasksTwo = JSON.parse(localStorage.getItem("TasksTwo"));
if (!TasksTwo){
    TasksTwo = [];
} else {
$(textTwo).val(TasksTwo.text);
}
};
var auditTasksTwo = function(){
    var twoHour = moment().set("hour", 14);
    if (moment().isAfter(twoHour)) {
$(textTwo).addClass("past");
}else if (moment().isBefore(twoHour)){
    $(textTwo).addClass("future");
}else{
    $(textTwo).addClass("present");
}};
auditTasksTwo();

//Three
$(threePm).text(moment().set("hour", 15).format("hA"));
$('#btnThree').on("click", function(){
    var taskTextThree = $('#textThree').val();
    var TasksThree = [];
    TasksThree = {text: taskTextThree}
    localStorage.setItem("TasksThree", JSON.stringify(TasksThree));
});
var loadTasksThree = function() {
TasksThree = JSON.parse(localStorage.getItem("TasksThree"));
if (!TasksThree){
    TasksThree = [];
} else {
$(textThree).val(TasksThree.text);
}
};
var auditTasksThree = function(){
    var threeHour = moment().set("hour", 15);
    if (moment().isAfter(threeHour)) {
$(textThree).addClass("past");
}else if (moment().isBefore(threeHour)){
    $(textThree).addClass("future");
}else{
    $(textThree).addClass("present");
}};
auditTasksThree();

//Four
$(fourPm).text(moment().set("hour", 16).format("hA"));
$('#btnFour').on("click", function(){
    var taskTextFour = $('#textFour').val();
    var TasksFour = [];
    TasksFour = {text: taskTextFour}
    localStorage.setItem("TasksFour", JSON.stringify(TasksFour));
});
var loadTasksFour = function() {
TasksFour = JSON.parse(localStorage.getItem("TasksFour"));
if (!TasksFour){
    TasksFour = [];
} else {
$(textFour).val(TasksFour.text);
}
};
var auditTasksFour = function(){
    var fourHour = moment().set("hour", 16);
    if (moment().isAfter(fourHour)) {
$(textFour).addClass("past");
}else if (moment().isBefore(fourHour)){
    $(textFour).addClass("future");
}else{
    $(textFour).addClass("present");
}};
auditTasksFour();

//Five
$(fivePm).text(moment().set("hour", 17).format("hA"));
$('#btnFive').on("click", function(){
    var taskTextFive = $('#textFive').val();
    var TasksFive = [];
    TasksFive = {text: taskTextFive}
    localStorage.setItem("TasksFive", JSON.stringify(TasksFive));
});
var loadTasksFive = function() {
TasksFive = JSON.parse(localStorage.getItem("TasksFive"));
if (!TasksFive){
    TasksFive = [];
} else {
$(textFive).val(TasksFive.text);
}
};
var auditTasksFive = function(){
    var fiveHour = moment().set("hour", 17);
    if (moment().isAfter(fiveHour)) {
$(textFive).addClass("past");
}else if (moment().isBefore(fiveHour)){
    $(textFive).addClass("future");
}else{
    $(textFive).addClass("present");
}};
auditTasksFive();

loadTasksNine();
loadTasksTen();
loadTasksEleven();
loadTasksTwelve();
loadTasksOne();
loadTasksTwo();
loadTasksThree();
loadTasksFour();
loadTasksFive();

// audit tasks every minute
setInterval(function() {
   auditTasksNine();
   auditTasksTen();
   auditTasksEleven();
   auditTasksTwelve();
   auditTasksOne();
   auditTasksTwo();
   auditTasksThree();
   auditTasksFour();
   auditTasksFive();
  }, 60000);