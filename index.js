const togglerElements = document.getElementsByClassName("icici_toggler_btn");
const togglerStatusElements = document.getElementsByClassName(
  "icici_toggle_status"
);
console.log(togglerElements);

function handleToggleEvent(event, index) {
  const isChecked = event?.target?.checked;
  togglerStatusElements[index].innerHTML = isChecked ? "ON" : "OFF";
  togglerStatusElements[index].style.color = isChecked ? "#F27B1A" : "#4A4A4A";
}

Array.prototype.forEach.call(togglerElements, function (togglerEle, index) {
  togglerEle.addEventListener("change", function (event) {
    handleToggleEvent(event, index);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var checkbox1 = document.getElementById("icici_checkbox_1");
  var checkbox2 = document.getElementById("icici_checkbox_2");
  var proceedBtn = document.querySelector(".icici_proceed_btn");

  function updateProceedButtonState() {
    proceedBtn.disabled = !(checkbox1.checked && checkbox2.checked);
  }

  checkbox1.addEventListener("change", updateProceedButtonState);
  checkbox2.addEventListener("change", updateProceedButtonState);

  updateProceedButtonState();
});
