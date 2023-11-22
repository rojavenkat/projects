const display = document.querySelector("textarea");
const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    let val = e.target.value;
    if (val == "=") {
      display.value = eval(display.value);
    } else if (val == "c") {
      display.value = " ";
    } else {
      display.value += val;
    }
  });
});
