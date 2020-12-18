$(document).ready(function () {
    var containerB = $(".container");
    var todaysDate = $("#currentDay");
    todaysDate.text(moment().format("MMMM DD, YYYY HH:mm"))
    var currentHour = moment().format("HH");

    // console.log(currentHour);
    //    previousElementSibling
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
        //retrieves data
        if (localStorage.getItem(hourArray[i]) !== null) {
            var scheduleData = localStorage.getItem(hourArray[i]);
            textArea.text(scheduleData); 
        }
        //creates the button
        var button = $("<button>");
        button.addClass("saveBtn col-sm-1 fas fa-save");
        button.data("data-scheduleData", hourArray[i]);
        row.append(button);
        // retrieve();
        // setting button attribute to text area
        // button.attr("event-data", textArea);

        //     console.log(button)
        // })
    
        $(".container").append(row);
        //when the save button is clicked
        
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
        
        // function retrieve () {
        //     if (info!== null) {
        //     var info = JSON.parse(localStorage.getItem(scheduleData));
    }
        $(containerB).on("click", "button", function (event) {
        event.preventDefault();
        console.log("you clicked me");
        scheduleData = $(this.previousElementSibling).val();
        console.log(scheduleData);
        var sData = $(this).data("data-scheduleData");
        localStorage.setItem(sData, scheduleData);


    });
})
     



