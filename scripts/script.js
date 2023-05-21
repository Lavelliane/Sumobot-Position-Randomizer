const btnRandom = document.getElementById("btnRandom");
const positionImg = document.getElementById("positionImg");
const positionName = document.getElementById("positionName");
const loadingDiv = document.querySelector(".wrapper");

const positionNames = [
  "Face Off",
  "Break up",
  "LDR",
  "Magkabilang mundo",
  "Hanggang tingin nalang",
  "So close, yet so far",
  "5 centimeters per second",
  "Ikaw ang kumpas, pag naliligaw",
  "Patawad, paalam",
  "Back to back to december",
  "Kahit konting pag-tingin",
  "Pweathering with you",
  "Umaasa",
  "Won't go home without you",
  "Thank U, next",
];

let previousNumber = null;

function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 15) + 1;
  } while (randomNumber === previousNumber);

  previousNumber = randomNumber;
  return randomNumber;
}

function hideLoading() {
  loadingDiv.style.visibility = "hidden";
}
function showLoading() {
  return new Promise(function(resolve, reject) {
    loadingDiv.style.visibility = "visible";

    // Set a timeout to hide the loading animation after a specific duration
    setTimeout(function() {
      hideLoading();
      resolve();
    }, 3000); // 4 seconds in milliseconds
  });
}

hideLoading();
btnRandom.addEventListener("click", (e) => {
  e.preventDefault();
  positionImg.style.visibility = "hidden";
  positionName.style.visibility = "hidden";
  const randomNumber = generateRandomNumber();
  showLoading().then(() => {
    positionImg.style.visibility = "visible";
    positionName.style.visibility = "visible";
    positionImg.src = `assets/pos_com_${randomNumber}.jpg`;
    positionName.innerText = positionNames[randomNumber-1];
  });
});
