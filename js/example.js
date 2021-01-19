//ul 0번째의 태그네임
var list = document.getElementsByTagName("ul")[0];

// li요소생성하여 newItemLast에 대입
var newItemLast = document.createElement("li");
// 텍스트노드를 생성하여  newItemLast에 대입
var newItemLast = document.createTextNode("크림");
//newItemLast 차일드에 newTextLast 붙여라
newItemLast.appendChild(newTextLast);
//리스트에 newTextLast 붙여라
list.appendChild(newItemLast);

// li요소생성하여 newItemFirst에 대입
var newItemFirst = document.createElement("li");
//  텍스트노드를 생성하여 newItemFirst에 대입
var newItemFirst = document.createTextNode("케일");
//newItemFirst 차일드에 newTextLast 붙여라
newItemFirst.appendChild(newItemFirst);
//리스트에 firstChild 붙여라
list.insertBefore(newItemFirst, list.firstChild);

//  CSS 셀렉터를 사용하여  li요소  listIrems 대입
var listIrems = document.querySelectorAll("li");

//선언 i
var i;
//listIrems길이만큼 반복하여 클래스명을 쿨 변환
for (i = 0; i < listIrems.length; i++) {
  listIrems[i].className = "cool";
}

//  CSS 셀렉터를 사용하여  li요소  heading 대입
var heading = document.querySelector("h2");
// 모르겠음
var headingText = heading.firstChild.nodeValue;
var totalltems = listItems.length;
var neHeading = headingText + "<span>" + totalltems + "</span>";
heading.innerHTML = newHeading;
