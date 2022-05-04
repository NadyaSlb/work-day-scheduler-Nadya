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

//add current day to header
$(currentDay).text(currentDayM.format("dddd, MMMM Do"));

//add time to time-blocks
$(nineAm).text(moment().set("hour", 9).format("hA"));
$(tenAm).text(moment().set("hour", 10).format("hA"));
$(elevenAm).text(moment().set("hour", 11).format("hA"));
$(twelvePm).text(moment().set("hour", 12).format("hA"));
$(onePm).text(moment().set("hour", 13).format("hA"));
$(twoPm).text(moment().set("hour", 14).format("hA"));
$(threePm).text(moment().set("hour", 15).format("hA"));
$(fourPm).text(moment().set("hour", 16).format("hA"));
$(fivePm).text(moment().set("hour", 17).format("hA"));