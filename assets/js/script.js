var currentDay = $('#currentDay');
var currentDayM = moment();

//add current day to header
$(currentDay).text(currentDayM.format("dddd, MMMM Do"));