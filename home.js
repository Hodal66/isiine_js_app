const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const MyResult = document.querySelector("#result");
const fmButton = document.getElementById("btn");
const TakeTheForm = document.querySelector("#formContiner");

function showMessage() {
  TakeTheForm.style.backgroundColor = "blue";
}
fmButton.addEventListener("mousemove", showMessage);
