// PROBLEM

// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

function highestScore(students) {
	var referenceClass = [];

	for (var i = 0; i < students.length; i++) {
		if (referenceClass.indexOf(students[i].class) === -1) {
			referenceClass.push(students[i].class);
		}
	}

	var arr_referenceClass = [];

	for (var i = 0; i < referenceClass.length; i++) {
		arr_referenceClass.push([]);
		for (var j = 0; j < students.length; j++) {
			if (students[j].class === referenceClass[i]) {
				arr_referenceClass[i].push(students[j]);
			}
		}
	}

	var highest_perClass = {};

	for (var i = 0; i < arr_referenceClass.length; i++) {
		var highest_student = {
			name: '',
			score: 0
		}
		var max  = 0;

		for (var j = 0; j < arr_referenceClass[i].length; j++) {
			if (arr_referenceClass[i][j].score > max) {
				max = arr_referenceClass[i][j].score;
				highest_student.name = arr_referenceClass[i][j].name;
				highest_student.score = arr_referenceClass[i][j].score;
			}
		}

		if (highest_perClass[referenceClass[i]] === undefined) {
			highest_perClass[referenceClass[i]] = highest_student;
		}
	}

	return highest_perClass;
}

console.log(highestScore([
	{
		name: 'Dimitri',
	    score: 90,
	    class: 'foxes'
	},
	{
	    name: 'Alexei',
	    score: 85,
	    class: 'wolves'
	},
	{
	    name: 'Sergei',
	    score: 74,
	    class: 'foxes'
	},
	{
	    name: 'Anastasia',
	    score: 78,
	    class: 'wolves'
	}
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
	{
	    name: 'Alexander',
	    score: 100,
	    class: 'foxes'
	},
	{
	    name: 'Alisa',
	    score: 76,
	    class: 'wolves'
	},
	{
	    name: 'Vladimir',
	    score: 92,
	    class: 'foxes'
	},
	{
	    name: 'Albert',
	    score: 71,
	    class: 'wolves'
	},
	{
	    name: 'Viktor',
	    score: 80,
	    class: 'tigers'
	}
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}