// PROBLEM

// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:
// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.

// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
// {
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [] // NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
// }

function graduates(students) {
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

	var graduates_perClass = {};

	for (var i = 0; i < arr_referenceClass.length; i++) {
		var graduated_student = {
			name: '',
			score: 0
		}
		var indikator_nilai  = 75;
		var arrGraduates = [];

		for (var j = 0; j < arr_referenceClass[i].length; j++) {
			if (arr_referenceClass[i][j].score > indikator_nilai) {
				graduated_student.name = arr_referenceClass[i][j].name;
				graduated_student.score = arr_referenceClass[i][j].score;
				arrGraduates.push(graduated_student);
			}

			graduated_student = {};
		}

		if (graduates_perClass[referenceClass[i]] === undefined) {
			graduates_perClass[referenceClass[i]] = arrGraduates;
		}
	}

	return graduates_perClass;
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }


console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}