var comScore = 0;
var useScore = 0;

function onComputerShoot() {
  var textElem = document.getElementById("text");
  var shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = "컴퓨터가 2점슛을 성공 시켰습니다.";
      comScore += 2;
      var comScorElem = document.getElementById("computer-score");
      comScorElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = "컴퓨터가 2점슛을 실패했습니다..";
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = "컴퓨터가 3점슛을 성공 시켰습니다.";
      comScore += 3;
      var comScorElem = document.getElementById("computer-score");
      comScorElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = "컴퓨터가 3점슛을 실패했습니다..";
    }
  }
}

function onUserShoot() {
  var textElem = document.getElementById("text");
  var shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = "2점슛을 성공 시켰습니다.";
      useScore += 2;
      var comScorElem = document.getElementById("user-score");
      comScorElem.innerHTML = useScore;
    } else {
      textElem.innerHTML = "2점슛을 실패했습니다..";
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = "3점슛을 성공 시켰습니다.";
      useScore += 3;
      var comScorElem = document.getElementById("user-score");
    } else {
      textElem.innerHTML = "3점슛을 실패했습니다..";
    }
  }
}
