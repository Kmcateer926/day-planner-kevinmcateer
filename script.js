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
    .attr("id", "H" + workDayHours[i].replace(" ", "").replace(":", ""));
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

// let storageArray = JSON.parse(localStorage.getItem("stored")) || [
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
// ];
$(".saveBtn").on("click", function () {

  var schedule = ($(this).siblings(".hour").attr("id"));
  var savedItem = ($(this).siblings("input").val());
 
  localStorage.setItem(schedule, savedItem);
  console.log($(this));
  console.log(schedule, savedItem);
//   console.log($(this).siblings("input").val());
//   console.log($(this).siblings(".hour").attr("id"))
});

$("#H900AM").siblings("input").val(localStorage.getItem("H900AM"))
$("#H1000AM").siblings("input").val(localStorage.getItem("H1000AM"))
$("#H1100AM").siblings("input").val(localStorage.getItem("H1100AM"))
$("#H1200AM").siblings("input").val(localStorage.getItem("H1200AM"))
$("#H100PM").siblings("input").val(localStorage.getItem("H100PM"))
$("#H200PM").siblings("input").val(localStorage.getItem("H200PM"))
$("#H300PM").siblings("input").val(localStorage.getItem("H300PM"))
$("#H400PM").siblings("input").val(localStorage.getItem("H400PM"))
$("#H500PM").siblings("input").val(localStorage.getItem("H500PM"))
console.log($("#H900AM").siblings("input"))
// // console.log(storeSchedule);
// // var element = target.rev("input");
// // var textInfo = element.val();
// // var index = element.attr("id");

// // savedSchedule.push({ index: index, text: textInfo });
// // localStorage.setItem("schedule", JSON.stringify(savedSchedule));

// // localStorage.setItem(saveSchedule, storeSchedule)
// console.log(saveBtn)
