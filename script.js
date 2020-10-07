console.log("hello world!");
var timeBlock = $(".time-block");
var universalTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var workDayHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var currentTime = moment().format("HH");
console.log(currentTime);
// this add current date to jumbotron
$("#currentDay").text(moment().format("ddd, MMM Do, YYY"));
// jquery variables
for (var i = 0; i < workDayHours.length; i++) {
    var timeEl = $("<div>").addClass("row time-block");
    var hourEl = $("<div>").addClass("hour col-sm-1").attr("id", "H" + workDayHours[i]);
    var textInput = $("<input>").addClass("col-sm-10");

    timeEl.append(hourEl, textInput);
    timeBlock.append(timeEl);
// this grabs attributes from css
    hourEl.text(workDayHours[i]);
    if (universalTime[i] < currentTime) {
        textInput.addClass("past");
    }
    else if (universalTime[i] > currentTime) {
        textInput.addClass("future");
    }
    else if (universalTime[i] == currentTime) {
        textInput.addClass("present");
    }
}
