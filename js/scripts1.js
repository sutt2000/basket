var comScore = 0;
var comPersent2 = 0.5;
var comPersent3 = 0.33;

var computer = {
  score: 0,
  percent2:0.5,
  percent3:0.33,
};

var user = {
  score:0,
  percent2:0.5,
  percent3:0.33,
}

var game = {
  isComputerturn: true,
  shotLift: 15
}


var userScore = 0;
var usetPrecent2 = 0.5;
var usetPrecent3 = 0.33;

var isComputerTurn = true;
var shotsLeft = 10;

function showText(s) {
  var textElem = document.getElementById("text");
  textElem.innerHTML = s;
}

function updateComputerScore(score) {
  comScore += score;
  var comScoreElem = document.getElementById("computer-score");
  comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
  userScore += score;
  var userScoreElem = document.getElementById("user-score");
  userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag) {
  var computerButtons = document.getElementsByClassName("btn-computer");
  for (let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disableUserButtons(flag) {
  var userButtons = document.getElementsByClassName("btn-user");

  for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = flag;
  }
}

function updateAI() {
  var diff = userScore - comScore;
  if (diff >= 2) {
    comPersent2 = 0.6;
    comPersent3 = 0.44;
  } else if (diff >= 5) {
    comPersent3 = 0.7;
    comPersent3 = 0.55;
  } else if (diff <= -2) {
    comPersent2 = 0.2;
    comPersent3 = 0.22;
  } else if (diff <= -5) {
    comPersent2 = 0.1;
    comPersent3 = 0.22;
  }
}

function onComputerShoot() {
  if (!isComputerTurn) {
    return;
  }

  updateAI();

  var shootType = Math.random() < comPersent2 ? 2 : 3;
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("컴퓨터가 2점슛을 성공 시켰습니다.");
      updateComputerScore(2);
    } else {
      showText("컴퓨터가 2점슛을 실패했습니다..");
    }
  } else {
    if (Math.random() < comPersent3) {
      showText("컴퓨터가 3점슛을 성공 시켰습니다.");
      updateComputerScore(3);
    } else {
      showText("컴퓨터가 3점슛을 실패했습니다..");
    }
  }

  isComputerTurn = false;

  disableComputerButtons(true);
  disableUserButtons(false);
}
// ------------------------------------------------------------

function onUserShoot(shootType) {
  if (isComputerTurn) {
    return;
  }
  // var textElem = document.getElementById("text");
  var userScorElem = document.getElementById("user-score");

  if (shootType === 2) {
    if (Math.random() < usetPrecent2) {
      showText("2점슛을 성공 시켰습니다.");
      updateUserScore(2);
    } else {
      showText("2점슛을 실패했습니다..");
    }
  } else {
    if (Math.random() < usetPrecent3) {
      showText("3점슛을 성공 시켰습니다.");
      updateUserScore(3);
    } else {
      showText("3점슛을 실패했습니다..");
    }
  }

  isComputerTurn = true;

  disableComputerButtons(false);
  disableUserButtons(true);

  shotsLeft--;

  var shotsLeftElem = document.getElementById("shots-left");
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) {
      showText("승리했습니다.");
    } else if (userScore < comScore) {
      showText("아쉽게도 졌습니다.");
    } else {
      showText("비겼습니다.");
    }
    // disableComputerButtons(false);
    // disableUserButtons(true);
    disableComputerButtons(true);
    disableUserButtons(true);
  }
}
