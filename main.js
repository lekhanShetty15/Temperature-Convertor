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

  if (isNaN(inputVal)) {
    alert("Please enter a valid number.");
    return;
  }

  if (selectedOption === "celsius") {
    result = inputVal;
    console.log(result);
  } else if (selectedOption === "fahrenheit") {
    result = (inputVal * 9/5) + 32;
    console.log(result);
  } else if (selectedOption === "kelvin") {
    result = inputVal + 273.15;
    console.log(result);
  } else if (selectedOption === "reaumur") {
    result = inputVal * 4/5;
    console.log(result);
  } else if (selectedOption === "rankine") {
    result = (inputVal + 273.15) * 9/5;
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




txt.addEventListener("input", () => {
  // Remove non-numeric characters except for hyphen and decimal points
  txt.value = txt.value.replace(/[^\d.-]/g, '');

  // If hyphen is present, ensure it's not repeated
  if (txt.value.indexOf('-') !== -1) {
    txt.value = txt.value.replace(/^-+/g, '-');
  }

  // Check if the input is not a valid number
  if (isNaN(txt.value)) {
    txt.classList.add("error");
  } else {
    txt.classList.remove("error");
  }
});

let refreshBtn = document.getElementById("refresh");

refreshBtn.addEventListener("click", () => {
  txt.value = "";
  txt1.value = "";
  finalans.value = "";
  txt.classList.remove("error");
});
