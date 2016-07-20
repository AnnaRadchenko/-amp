/*0.
Создать функицю, которая принимает строку селектор и возвращает:
- undefined - если ничего не найдено
- найденую ноду - если она одна
- массив нод - если их несколько
- если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
*/

function searchElement(el) {

  if (el instanceof Node) {
    if(el.nodeType == 1) {
      return 'Element';
    } else if (el.nodeType == 2) {
      return 'Attribute';
    } else if (el.nodeType == 3){
      return 'Text';
    } else if (el.nodeType == 8){
      return 'Comment';
    } else {
      return 'Node';
    }

  }

    var elem = document.querySelectorAll(el);

    if (elem.length === 0) {
        return undefined;
    }
    if (elem.length === 1) {
        return elem[0];
    }
    return elem;
}

console.log(searchElement('.abc'));
console.log(searchElement('#one_node'));
console.log(searchElement('span'));

/*1.
Создать функцию, которая принимает строку селектор и возвращает:
- undefined - если ничего не найдено
- найденую ноду - если она одна
- первую найденную ноду - если их несколько
*/

function searchElementFirstOfType(el) {
  var elem = document.querySelectorAll(el);
  var result = elem.length >= 1 ? elem[0] : undefined;
  return result;
}

console.log(searchElementFirstOfType('.abc'));
console.log(searchElementFirstOfType('#one_node'));
console.log(searchElementFirstOfType('span'));

/*2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.*/
var elem = document.createElement("div");
var div = document.getElementById("one_node");

function insertAfterElem(searchElem, newElem) {
  searchElem.parentNode.insertBefore(newElem, searchElem.nextSibling);
}

elem.innerHTML = "abc";

insertAfterElem(div, elem);

/*3.
Создать функцию, которая выдает значение аттрибута или ставит его значение.
Чтение.
  Что имеется в виду - Допустим есть элемент:
          <titanic style="float:none"></titanic>
          Если передать в функцию 'style' - она должна выдать "float:none"
          <ninja color="black" visibility="hidden"></ninja>
          Если передать в функцию 'color' - она должна выдать "black"
Установка.
  Что имеется в виду - Допустим есть элемент:
            <lego></lego>
            Если передать в функцию два параметра - аттрибут и значение, то нода должна выглядеть
            <lego style="display:block"></lego>
            Если значение этого аттрибута уже задано, устанавливается новое значение.
Было:
          <chucknorris speed="5"></chucknorris>
После вызова функции с передачей аттрибута и значения (speed Infinity):
          <chucknorris speed="Infinity"></chucknorris>
*/

function setAttr( attr, property ) {
  var elem = document.querySelector('#one_node');

  if (elem.getAttribute(attr) !== null) {
    return console.log(elem.getAttribute(attr));
  }

  if (property) {
    elem.style.setProperty( attr, property );
    return console.log(elem);
  }

  return console.log('error');
}
setAttr('border', '1px solid coral');

/*
4. С помощью JS создайте шахматное поле:
- контейнер поля
- 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
- ячейки раскрашены белым и черным
- нужные аттрибуты и стили задавайте с помощью JS
*/

var container = document.createElement("div");

container.style.width = "500px";
container.style.height = "500px";

for (var i=0; i < 64; i++){
    var cell = document.createElement("div");
    cell.style.width = '12.5%';
    cell.style.height = '12.5%';
    cell.style.float = 'left';
    cell.style.background = Math.floor((i / 8) + i) % 2 == 0 ? '#fff' : '#000';
    container.appendChild(cell);
}
document.body.appendChild(container);




