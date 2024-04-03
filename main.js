let option = document.getElementById("option");
let downArrow = document.getElementById("downArrow");
let txt = document.getElementById("txt");
let txt1 = document.getElementById("txt1");
let finalans = document.getElementById("final-ans");
let submit = document.getElementById("submit");

downArrow.addEventListener("click", () => {
  if (option.style.display === "block") {
    option.style.display = "none";
    downArrow.classList.remove("fontdrop");
  } else {
    option.style.display = "block";
    downArrow.classList.add("fontdrop");
  }
});

document.querySelectorAll(".option-value").forEach((item) => {
  item.addEventListener("click", (event) => {
    txt1.value = event.target.textContent;
    option.style.display = "none";
    downArrow.classList.remove("fontdrop");
  });
});

submit.addEventListener("click", () => {
  let inputVal = parseFloat(txt.value);
  let selectedOption = txt1.value.toLowerCase();
  let result;

  if (selectedOption === "degree") {
    result = inputVal;
    console.log(result);
  } else if (selectedOption === "celcius") {
    result = (inputVal - 32) * (5 / 9);
    console.log(result);
  } else if (selectedOption === "farenhite") {
    result = inputVal * (9 / 5) + 32;
    console.log(result);
  }

  finalans.value = result.toFixed(2);
});

function updateSystemTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let formattedTime = hours + ":" + minutes;

  document.getElementById("system-time").textContent = formattedTime;
}

updateSystemTime();

setInterval(updateSystemTime, 1000);
