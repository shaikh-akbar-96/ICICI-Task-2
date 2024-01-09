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

document.addEventListener("input", function (e) {
  if (
    e.target.tagName.toLowerCase() === "input" &&
    e.target.type === "number"
  ) {
    const maxLength = parseInt(e.target.getAttribute("maxlength"));
    const value = e.target.value;

    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
    }

    if (value.length === maxLength) {
      const nextInput = e.target.nextElementSibling;
      if (nextInput && nextInput.tagName.toLowerCase() === "input") {
        nextInput.focus();
      }

      // Check if all input fields are filled
      const allInputsFilled = Array.from(
        document.querySelectorAll('input[type="number"]')
      ).every(
        (input) =>
          input.value.length === parseInt(input.getAttribute("maxlength"))
      );

      // Enable the button if all input fields are filled
      const sendOtpButton = document.querySelector(".icici_send_otp_button");
      if (allInputsFilled) {
        sendOtpButton.removeAttribute("disabled");
      } else {
        sendOtpButton.setAttribute("disabled", "true");
      }
    }
  }
});
