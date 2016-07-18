//-------------------------------------------1 part-------------------------------------------//

//1.1

function extractCharacters( str ) {

  var strLowerCase = str.toLowerCase().split('');
  var uniqueCharacters = {};

  for (var i = 0; i < strLowerCase.length; i++) {
    var str = strLowerCase[i];
    uniqueCharacters[str] = true;
  }
  console.log( Object.keys(uniqueCharacters) );
}

extractCharacters('abcd');
extractCharacters('aaaabc');
extractCharacters('Hello, world');

//1.2

function createLogger( prefix ) {

  var date = new Date().toISOString();

  function getData(data) {
    console.log(date + ' ' + prefix + ': ' + data);
  };

  return getData;
}

var myLogger = createLogger ('My Logger');

myLogger( 'some data' );
//


function  createLogger () {
  if (! window.console || ! console.log) {
    
    function getData(data) {
      console.log(date + ' ' + prefix + ': ' + data);
    };

    return getData;
  }
  return createLogger.prototype.bind.call(console.log, console);
} ();

var myLogger = createLogger ('My Logger');

myLogger( 'some data' );

//-------------------------------------------2 part-------------------------------------------//

/*
2.1
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F"
*/

function celsiusToFahrenheit (t) {

  var fahrenheit = t * 1.8 + 32;
  return t + "°C = " + fahrenheit + "°F";

}

/*
2.2
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C
*/

function fahrenheitToCelsius (fahrenheit) {

  var t = (fahrenheit - 32) / 1.8;
  return fahrenheit + "°F = " + t + "°C";

}

/*
2.3
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Hello, GlobalLogic!'
Expected Output : 'GlobalLogic'
*/

function findBigWord (str) {

  var bigWord = str.split(" ").map(replaceElement).reduce(reduceElement);

  function replaceElement (el) {
    return el.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/gmi, '');
  }

  function reduceElement (x, y) {
    var elemLength = (x.length > y.length) ? x : y;
    return elemLength;
  }
  return bigWord;
}

/*
2.4
Write a function that can print entity details based on next model:
{
  name: String,
  type: String,
  age: Number
}
Expected output: "%NAME%(%TYPE%) - %AGE%."
*/

var obj = {
    name: 'Anna',
    type: 'female',
    age: 25
};

function printDetails (el) {
  var details = "%" + el.name + "%(%" + el.type + "%) - %" + el.age + "%." ;
  return details;
}

console.log(printDetails(obj));

/*
2.5
Rewrite that function to use this instead of argument (use apply, call and bind to print the details of different entities).
*/
var obj = {
    name: 'Anna',
    type: 'female',
    age: 25
};
var useApply = printDetails.apply(obj, ['name', 'type', 'age']);
var useCall = printDetails.call(obj, 'name', 'type', 'age');
var useBind = printDetails.bind(obj);

function printDetails () {
    return "%" + this.name + "%(%" + this.type + "%) - %" + this.age + "%." ;
}

console.log(useApply);
console.log(useCall);
console.log(useBind());







