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
  let checkbox1 = document.getElementById("icici_checkbox_1");
  let checkbox2 = document.getElementById("icici_checkbox_2");
  let proceedBtn = document.querySelector(".icici_proceed_btn");

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

    const allInputsFilled = Array.from(
      document.querySelectorAll('input[type="number"]')
    ).every(
      (input) =>
        input.value.length === parseInt(input.getAttribute("maxlength"))
    );
    console.log(allInputsFilled);
    const sendOtpButton = document.querySelector(".icici_send_otp_button");

    if (allInputsFilled) {
      sendOtpButton.removeAttribute("disabled");
    } else {
      sendOtpButton.setAttribute("disabled", "true");
    }
    if (value.length === maxLength) {
      const nextInput = e.target.nextElementSibling;
      if (nextInput && nextInput.tagName.toLowerCase() === "input") {
        nextInput.focus();
      }
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (
    e.target.tagName.toLowerCase() === "input" &&
    e.target.type === "number" &&
    e.key === "Backspace" &&
    e.target.value.length === 0
  ) {
    const previousInput = e.target.previousElementSibling;
    if (previousInput && previousInput.tagName.toLowerCase() === "input") {
      previousInput.focus();
    }

    const sendOtpButton = document.querySelector(".icici_send_otp_button");
    sendOtpButton.setAttribute("disabled", "true");
  }
});

function checkInput() {
  let otpInput = document.getElementById("otpInput");
  let proceedButton = document.getElementById("proceedButton");
  otpInput.addEventListener("input", function () {
    let numericValue = otpInput.value.replace(/[^0-9]/g, "");
    numericValue = numericValue.slice(0, 4);
    otpInput.value = numericValue;
    proceedButton.disabled = !(numericValue.length === 4);
  });
}

function showOtpSection() {
  let otpSection = document.getElementsByClassName("icici_otp_verification");
  let buttonSection = document.getElementsByClassName("icici_buttons");
  otpSection[0].style.display = "block";
  buttonSection[0].style.display = "none";
}

function showInputSection() {
  let inputsection = document.getElementsByClassName("icici_buttons");
  let otpField = document.getElementsByClassName("icici_otp_verification");

  inputsection[0].style.display = "block";
  otpField[0].style.display = "none";
}
