// PROBLEM

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.
// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

function naikAngkot(arrPenumpang) {
	var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var	result = [];

	for (var i = 0; i < arrPenumpang.length; i++) {
		var output = {
			penumpang: '',
			naikDari: '',
			tujuan: '',
			bayar: 0
		}

		output.penumpang = arrPenumpang[i][0];
		output.naikDari = arrPenumpang[i][1];
		output.tujuan = arrPenumpang[i][2];

		var ongkos = Math.abs(rute.indexOf(output.tujuan) - rute.indexOf(output.naikDari)) * 2000;
		
		output.bayar = ongkos;
		result.push(output);
	}

	return result;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]