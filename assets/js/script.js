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
loadTasksNine();
loadTasksTen();
loadTasksEleven();
loadTasksTwelve();
loadTasksOne();
loadTasksTwo();
loadTasksThree();
loadTasksFour();
loadTasksFive();