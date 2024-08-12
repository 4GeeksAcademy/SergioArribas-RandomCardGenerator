/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Con botón
window.onload = function() {
  function generateCard() {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const symbols = ["♠", "♥", "♦", "♣"];

    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    const topNumber = document.getElementById("top-number");
    const bottomNumber = document.getElementById("bottom-number");
    const symbol = document.getElementById("symbol");

    topNumber.textContent = randomNumber;
    bottomNumber.textContent = randomNumber;
    symbol.textContent = randomSymbol;

    // Limpiamos clases anteriores
    topNumber.classList.remove("red", "black");
    bottomNumber.classList.remove("red", "black");
    symbol.classList.remove("red", "black");

    if (randomSymbol === "♥" || randomSymbol === "♦") {
      topNumber.classList.add("red");
      bottomNumber.classList.add("red");
      symbol.classList.add("red");
    } else {
      topNumber.classList.add("black");
      bottomNumber.classList.add("black");
      symbol.classList.add("black");
    }
  }

  document.querySelector("button").addEventListener("click", generateCard);
};

//>Con temporizado

// window.onload = function() {
//   function generateCard() {
//     const numbers = [
//       "A",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "J",
//       "Q",
//       "K"
//     ];
//     const symbols = ["♠", "♥", "♦", "♣"];

//     const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//     const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

//     const topNumber = document.getElementById("top-number");
//     const bottomNumber = document.getElementById("bottom-number");
//     const symbol = document.getElementById("symbol");

//     topNumber.textContent = randomNumber;
//     bottomNumber.textContent = randomNumber;
//     symbol.textContent = randomSymbol;

//     // Limpiamos clases anteriores
//     topNumber.classList.remove("red", "black");
//     bottomNumber.classList.remove("red", "black");
//     symbol.classList.remove("red", "black");

//     if (randomSymbol === "♥" || randomSymbol === "♦") {
//       topNumber.classList.add("red");
//       bottomNumber.classList.add("red");
//       symbol.classList.add("red");
//     } else {
//       topNumber.classList.add("black");
//       bottomNumber.classList.add("black");
//       symbol.classList.add("black");
//     }
//   }
//   generateCard();
//   setInterval(generateCard, 10000);
// };
