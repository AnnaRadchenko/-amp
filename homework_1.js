//1

function checkOneNum (i) {

  	if ( i >= 8 && i <= 21){
  		console.log ("Hello");
  	} else if (isNaN(i) && typeof i !=== "number") {
  		console.log ("It is not a number");

  	} else {
  		console.log ("It is not good time for that");
  	}
}

//2

function numberMinMax(arr, boolean) {
    return (boolean === true)? Math.max.apply(null, arr): Math.min.apply(null, arr);
}

//3

function numberSquare (i) {
	if (i % 2 === 0 && typeof i === "number"){
		return Math.pow(i, 2);
	}
}

//4

function checkNumber(i, x){
	return result = (i > x) ? i - x : i + x;
}
console.log (result);

//5

function numberRang (i, x) {
	var sum = i + x;
	if (sum >= 11 && sum <= 19){
		return console.log(sum);
	}
	return console.log("Result is not in range between 11 and 19");
}

//6

function remainderDivision (i, x){
	var result = (i % x === 0) ? true : false;
    return console.log(result);
}

//7

function checkLastNum(i,x) {
  var result = (i % 10) === (x % 10);
  return result;
}

//8

var arr = [1, 2, 3, 4, 5, 6, 7];

//8.1

while (i < arr.length) {
  console.log( arr[i] );
  i++;
}

//8.2

do {
  console.log( arr[i] );
  i++;
} while (i < arr.length);

//8.3

for (i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

//8.4

for (var i in arr) {
   console.log(arr[i]);
}

//9 (Palindrome)

function isPalindrome(str) {
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 'ok';
      } else {
        result = 'no';
        return result;
      }
    }
    return result;
  }

//10 (FizzBuzz)

function integerFizzBuzz () {

	for (var i=1; i <= 100; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
    }
}

//11 (Vampire Numbers)

function vampireNumbers(i, x){
  var numOrigin = String(i) + String(x),
      numFabricate = String(i * x);

  numOrigin = numOrigin.split('').sort().join('');
  numFabricate = numFabricate.split('').sort().join('');

  return numFabricate === numOrigin ? true : false;
}

