const togglerElements = document.getElementsByClassName("icici_toggler_btn");
const togglerStatusElements = document.getElementsByClassName(
  "icici_toggle_status"
);
console.log(togglerElements);

function handleToggleEvent(event, index) {
  const isChecked = event?.target?.checked;
  togglerStatusElements[index].innerHTML = isChecked ? "ON" : "OFF";
  togglerStatusElements[index].style.color = isChecked ? "#f27b1a" : "#4A4A4A";
}

Array.prototype.forEach.call(togglerElements, function (togglerEle, index) {
  togglerEle.addEventListener("change", function (event) {
    handleToggleEvent(event, index);
  });
});
