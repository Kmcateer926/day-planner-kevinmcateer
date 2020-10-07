console.log("hello world!");
var timeBlock = $(".time-block");
var universalTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var workDayHours = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
var currentTime = moment().format("HH");
console.log(currentTime);
// this add current date to jumbotron
$("#currentDay").text(moment().format("ddd, MMM Do, YYY"));
// jquery variables
for (var i = 0; i < workDayHours.length; i++) {
  var timeEl = $("<div>").addClass("row time-block");
  var hourEl = $("<div>")
    .addClass("hour col-sm-1")
    .attr("id", "H" + workDayHours[i]);
  var textInput = $("<input>").addClass("col-sm-9");
  var saveBtn = $("<button>").attr("class", "saveBtn fas fa-save col-1");
  timeEl.append(hourEl, textInput, saveBtn);
  timeBlock.append(timeEl);
  // this grabs attributes from css depending on time of day
  hourEl.text(workDayHours[i]);
  // grey when past current time
  if (universalTime[i] < currentTime) {
    textInput.addClass("past");
  }
  // green when current time has not passed
  else if (universalTime[i] > currentTime) {
    textInput.addClass("future");
  }
  // red when current time
  else if (universalTime[i] == currentTime) {
    textInput.addClass("present");
  }
}

localStorage.setItem("input", JSON.stringify(input));
var savedSchedule = JSON.parse(localStorage.getItem("input"));
textInput.textContent = savedSchedule;


// // console.log(storeSchedule);
// // var element = target.rev("input");
// // var textInfo = element.val();
// // var index = element.attr("id");
 
// // savedSchedule.push({ index: index, text: textInfo });
// // localStorage.setItem("schedule", JSON.stringify(savedSchedule));

// // localStorage.setItem(saveSchedule, storeSchedule)
// console.log(saveBtn)

