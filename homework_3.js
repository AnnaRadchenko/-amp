//1

var obj1 = {
    name: "Anna",
    age: 25
};

function Obj2(name, age) {
  this.name = name;
  this.age = age;
}

var obj2 = new Obj2("Mari", 27);

function compareObjects(object1, object2, property) {
    return console.log(object1.property > object2.property ? object1.name : object2.name);
}

compareObjects(obj1, obj2, 'age');

//2

var songs = [
  {
	name: "songFavorite1",
	played: Math.round(Math.random() * 100),
  },
  {
	name: "songFavorite2",
	played: Math.round(Math.random() * 100)
  {
	name: "songFavorite3",
	played: Math.round(Math.random() * 100)
  },
  {
	name: "songFavorite4",
	played: Math.round(Math.random() * 100)
  },
  {
	name: "songFavorite5",
	played: Math.round(Math.random() * 100)
  }
]

function favoriteSong(songs) {

  var favoriteSong = songs[0];
  var index = 0;

  for (var i = 0; i < songs.length; i++) {
      favoriteSong = songs[i];
      index = i;
  }

  var result = {
      name: favoriteSong.name,
      played: favoriteSong.played,
      index: index
  }

  return result;
}

favoriteSong(songs);

//3

function Calculator() {

	var value = 0;

	this.add = function(num) {
		value += num;
	};

	this.getCurrentSum = function(i)	{
		/*
		returns the resulting number by the index on step
		I call
		if (i == true){ value += value[i] }
		return value
		Tell me please where a mistake?
		*/
		return (i == true) ? value[i] : value;
	};
}

	var calculator1 = new Calculator();
	var calculator2 = new Calculator();

	calculator1.add(3);
	calculator1.add(8);
	calculator1.add(11);
	calculator2.add(5);
	calculator2.add(12);
	calculator2.add(17);

	console.log(calculator1.getCurrentSum() + calculator2.getCurrentSum());
	console.log(calculator1.getCurrentSum(2) + calculator2.getCurrentSum(2));//?
	console.log(calculator1.getCurrentSum(3));
    console.log(calculator1.getCurrentSum());