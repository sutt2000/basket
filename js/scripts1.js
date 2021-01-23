var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 3;

function showText(s){
  var textElem = document.getElementById('text');
  textElem.innerHTML = s;
} 


function onComputerShoot() {
  if (!isComputerTurn) {
    return;
  }

  // var textElem = document.getElementById("text");
  var shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("컴퓨터가 2점슛을 성공 시켰습니다.");
      comScore += 2;
      var comScorElem = document.getElementById("computer-score");
      comScorElem.innerHTML = comScore;
    } else {
      showText("컴퓨터가 2점슛을 실패했습니다..");
    }
  } else {
    if (Math.random() < 0.33) {
      showText("컴퓨터가 3점슛을 성공 시켰습니다.");
      comScore += 3;
      var comScorElem = document.getElementById("computer-score");
      comScorElem.innerHTML = comScore;
    } else {
      showText("컴퓨터가 3점슛을 실패했습니다..");
    }
  }
  isComputerTurn = false;

  var computerButtons = document.getElementsByClassName("btn-computer");

  for (let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = true;
  }

  var userButtons = document.getElementsByClassName("btn-user");

  for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = false;
  }
}

// ------------------------------------------------------------

function onUserShoot(shootType) {
  if (isComputerTurn) {
    return;
  }
  // var textElem = document.getElementById("text");
  var userScorElem = document.getElementById("user-score");

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("2점슛을 성공 시켰습니다.");
      userScore += 2;
      userScorElem.innerHTML = userScore;
    } else {
      showText("2점슛을 실패했습니다..");
    }
  } else {
    if (Math.random() < 0.33) {
      showText("3점슛을 성공 시켰습니다.");
      userScore += 3;
      userScorElem.innerHTML = userScore;
    } else {
      showText("3점슛을 실패했습니다..");
    }
  }
  
  isComputerTurn = true;

  var userButtons = document.getElementsByClassName("btn-user");

  for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = true;
  }

  var computerButtons = document.getElementsByClassName("btn-computer");

  for (let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = false;
  }


  shotsLeft--;
  var shotsLeftElem = document.getElementById("shots-left");
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) {
      textElem.innerHTML = " 승리했습니다.";
    } else if (userScore < comScore) {
      textElem.innerHTML = " 아쉽게도 졌습니다.";
    } else {
      textElem.innerHTML = " 비겼습니다.";
    }
    for (let i = 0; i < computerButtons.length; i++) {
      computerButtons[i].disabled = true;
    }
  
    for (let i = 0; i < userButtons.length; i++) {
      userButtons[i].disabled = true;
    }
  }


}
