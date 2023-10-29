const btnRef = document.querySelectorAll(".btn");
const msg = document.getElementById("msg");
const popupRef = document.querySelector(".popup");
const winner = document.getElementById("winner");
var c = 0;
const winningpattern = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function enablebuttons() {
  btnRef.forEach((element) => {
    element.innerHTML = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
}

function disablebuttons(el1) {
  btnRef.forEach((element) => {
    element.disabled = true;
    popupRef.classList.remove("hide");
    greet.innerHTML = "Congrats👑👑";

    if (el1 == "0") winner.innerHTML = "PLAYER2 Won";
    else if (el1 == "X") winner.innerHTML = "PLAYER1 Won";
  });
}

function winchecker() {
  c = c + 1;
  for (let i of winningpattern) {
    let [el1, el2, el3] = [
      btnRef[i[0]].innerHTML,
      btnRef[i[1]].innerHTML,
      btnRef[i[2]].innerHTML,
    ];
    if (el1 != "" && el2 != "" && el3 != "") {
      if (el1 == el2 && el2 == el3) {
        c = 0;
        disablebuttons(el1);
        break;
      }
    }
    if (c == 9) {
      popupRef.classList.remove("hide");
    greet.innerHTML = "Keep Trying👍";

      winner.innerHTML = "It's a DRAW";
    }
  }
}

function start(xTurn, count) {
  btnRef.forEach((element) => {
    element.addEventListener("click", () => {
      if (xTurn) {
        element.innerHTML = "X";
        element.disabled = true;
        xTurn = false;
      } else {
        element.innerHTML = "0";
        element.disabled = true;
        xTurn = true;
      }
      winchecker();
    });
  });
}

start(true, 0);
