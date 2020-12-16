

// var todaysDate = $("#currentDay");
// todaysDate.text(moment().format("dddd,mmmm, do YYYY"))

var timeofDay
console.log ("hello, world")

var row = $("<div>");
row.addClass("row time-block");

var hour = $("<div>");
hour.addClass("hour col-sm-1");
row.append(hour);

var textArea = $("<text-area>");
textArea.addClass("past description col-sm-10");
row.append(textArea);

var button = $("<button>");
button.addClass("saveBtn col-sm-1");
row.append(button);

$(".container").append(row);


document.createElement