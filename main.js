import "./style.css";

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const input = document.getElementById("input");
const label = document.getElementById("label");
const pageBackground = document.querySelector(".outer-container");

const toasts = document.querySelectorAll(".toast");

button1.addEventListener("click", () => {
  toasts[0].style = "background:yellow;";
});
button2.addEventListener("click", () => {
  toasts[1].textContent = "SUCCESS";
});
button3.addEventListener("click", () => {
  toasts[2].style = "visibility:hidden;";
});
button4.addEventListener("click", () => {
  if (
    toasts[3].checkVisibility({
      checkOpacity: true,
      checkVisibilityCSS: true,
    })
  ) {
    toasts[3].style = "visibility:hidden;";
  } else {
    toasts[3].style = "visibility:visible;";
  }
});
const colors = ["red", "green", "yellow"];
let colorIndex = 0;
const changeColor = () => {
  colorIndex = (colorIndex + 1) % colors.length;
  return colors[colorIndex];
};
button5.addEventListener("click", () => {
  toasts[4].style.backgroundColor = changeColor(colorIndex);
});

let counter = 0;

button6.addEventListener("click", () => {
  var timeout = null;

  function doStuff() {
    counter++;
    toasts[5].textContent = counter;
    timeout = setTimeout(doStuff, 3000);
    if (counter >= 10) {
      clearTimeout(timeout);
      counter = 0;
    }
  }
  doStuff();
});
button7.addEventListener("click", () => {
  toasts.forEach((element) => {
    element.style.backgroundColor = "#18D5E1";
  });
  pageBackground.style.backgroundColor = "#000000";
});
let timeout2 = null;
let counter2 = 0;
toasts[4].addEventListener("mouseenter", () => {
  if (timeout2 != null) {
    clearTimeout(timeout2);
    timeout2 = null;
    counter2 = 0;
  }
  function doStuff2() {
    counter2++;
    toasts[4].textContent = counter2;
    timeout2 = setTimeout(doStuff2, 3000);
    if (counter2 >= 10) {
      clearTimeout(timeout2);
      counter2 = 0;
    }
  }
  doStuff2();
});
toasts[4].addEventListener("mouseout", () => {
  toasts[4].textContent = 0;
  clearTimeout(timeout2);
  counter2 = 0;
});

input.addEventListener("keyup", () => (label.textContent = input.value));
