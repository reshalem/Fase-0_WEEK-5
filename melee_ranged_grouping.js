// PROBLEM

// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping 
// agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
// Jika input adalah string kosong ('') maka return array kosong

function meleeRangedGrouping(str) {
	var arrStyle = str.split(',');

	var arrMelee = [];
	var arrRanged = [];

	for (var i = 0; i < arrStyle.length; i++) {
		if (arrStyle[i].indexOf('Melee') !== -1) {
			arrMelee.push(arrStyle[i]);
		} else if (arrStyle[i].indexOf('Ranged') !== -1) {
			arrRanged.push(arrStyle[i]);
		}
	}

	var arrGrouped = [];

	arrGrouped.push(arrRanged);
	arrGrouped.push(arrMelee);

	if (str.length === 0) {
		return [];
	} else {
		return arrGrouped;
	}
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []