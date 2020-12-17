

var todaysDate = $("#currentDay");
todaysDate.text(moment().format("MMMM DD, YYYY HH:mm"))
.set
textInput = ""
var currentHour = moment().format("HH");
console.log(currentHour);
$(document).ready(function(){
//work hours
var hourArray = [09,10,11,12,13,14,15,16,17];
//for loop to create the elements on the page
for(var i = 0; i <hourArray.length; i++) {

console.log ("hello, world")
//creates the row
var row = $("<div>");
row.addClass("row time-block");
//creates the hours
var hour = $("<div>");
hour.addClass("hour col-sm-1");
hour.text(moment().set("hour", hourArray[i]).format("HA"));
row.append(hour);

//creates the text field
var textArea = $("<text-area>");
textArea.addClass("past description col-sm-10");
row.append(textArea);
if (currentHour < hourArray[i]) {
    textArea.addClass ("future");
}  else if (currentHour > hourArray[i]) {
    textArea.addClass ("past");
}   else if (currentHour === hourArray[i]) {
    textArea.addClass ("present");
}

//creates the button
var button = $("<button>");
button.addClass("saveBtn col-sm-1 fas fa-save");
row.append(button);

$(".container").append(row);
// if (arrayOfHours )
}
});
//create the row for each time block

//create the first column of the time block for the time

//create the second column of the time block for the text

//change the css class for the background color based upon the current hour

document.createElement