$(document).ready(function () {

var todaysDate = $("#currentDay");
todaysDate.text(moment().format("MMMM DD, YYYY HH:mm"))
var currentHour = moment().format("HH");
var scheduleData = []
// console.log(currentHour);
    retrieve()
    //work hours
    var hourArray = [09, 10, 11, 12, 13, 14, 15, 16, 17];
    //for loop to create the elements on the page
    for (var i = 0; i < hourArray.length; i++) {

        console.log("hello, world")
        //creates the row
        var row = $("<div>");
        row.addClass("row time-block");
        //creates the hours
        var hour = $("<div>");
        hour.addClass("hour col-sm-1");
        hour.text(moment().set("hour", hourArray[i]).format("hA"));
        row.append(hour);

        //creates the text field
        var textArea = $("<textarea>");
        textArea.data("scheduleData", scheduleData);
        textArea.addClass("past description col-sm-10");
        row.append(textArea);
        // console.log(textArea)
        //changes color based on current time
        if (currentHour < hourArray[i]) {
            textArea.addClass("future");
        } else if (currentHour > hourArray[i]) {
            textArea.addClass("past");
        } else if (currentHour === hourArray[i]) {
            textArea.addClass("present");
        }

        //creates the button
        var button = $("<button>");
        button.addClass("saveBtn col-sm-1 fas fa-save");
        button.data("hourArr", hourArray[i]);
        row.append(button);
        // setting button attribute to text area
        // button.attr("event-data", textArea);
        
        //     console.log(button)
        // })
        $(".container").append(row);
        //when the save button is clicked
        $(button).on("click", function(event) {
        event.preventDefault();
        console.log("you clicked me")
        scheduleData = textArea.value   
        console.log(scheduleData)  
        localStorage.setItem("scheduleData", JSON.stringify(scheduleData));

    });
        // setting the text to add to local storage
        // $("button").on("click", function() {
        //     var textInput = 
        //     textInput = localstorage.setitems("textInput", JSON.stringify(textInput))
            
        // localStorage.setItem("textInput", JSON.stringify(textInput));
            // textArea.text(textInput);
        //     console.log("something")
        //     ;
        // })
        
        //setting get text from local storage
        // function schedule(event) {
            
        // }
        
    }
    function retrieve () {
        if (scheduleData!== null) {
        var scheduledData = JSON.parse(localStorage.getItem(scheduleData));
    }
    }
})


