수고하셨습니다^^

 

var list = document.getElementsByTagName('ul')[0]; // ul태그의 첫 번째를 가져와 객체를 만든다

 

var newItemLast = document.createElement('li'); // li요소를 생성한다

var newTextLast = document.createTextNode('크림'); //텍스트 노드를 생성한다

newItemLast.appendChild(newTextLast); //li요소에 크림텍스트 노드를 추가한다

list.appendChild(newItemLast); //list객체에 <li>요소의 크림 텍스트를 끝에 추가한다

 

var newItemFirst = document.createElement('li'); // li 요소를 생성한다

var newTextFirst = document.createTextNode('케일'); //텍스트 노드를 생성한다

newItemFirst.appendChild(newTextFirst); //li요소에 케일 텍스트 노드를 추가한다

list.insertBefore(newItemFirst, list.firstChild); // list객체에 <li>요소의 케일텍스트를 처음에 추가한다

 

var listItems = document.querySelectorAll('li'); // 모든 li요소를 찾아 객체 생성한다

 

var i;

for (i = 0; i < listItems.length; i++) { //모든 li요소에 cool이라는 값을 갖는 class속성을 추가 한다

listItems[i].className = 'cool';

}

 

var heading = document.querySelector('h2'); //h2 요소를 찾는다

var headingText = heading.firstChild.nodeValue; //h2 요소의 텍스트를 가져온다

var totalItems = listItems.length; //li요소의 개수를 저장한다

var newHeading = headingText + '<span>' + totalItems + '</span>'; // 제목 내용을 제목 + li요소의 개수로 수정한다

heading.innerHTML = newHeading; //innerHTML 속성을 이용하여 H2의 콘텐츠를 수정한다.