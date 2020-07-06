conversionValues = {
	angle: {
		// FIRST VALUE: CONVERT TO DEGREE
		// SECOND VALUE: CONVERT FROM DEGREE TO THE ACTUAL ANGLE

		//radian
		0: {
			0: 180/Math.PI,
			1: Math.PI/180
		},
		
		//degree
		1: {
			0: 1,
			1: 1
		},
		//minute
		2: {
			0: 1/60,
			1: 60
		},
		//second
		3: {
			0: 1/3600,
			1: 3600
		},
		//sextant
		4: {
			0: 60,
			1: 1/60
		},
		//quadrant
		5: {
			0: 90,
			1: 1/90
		},
		//circle
		6: {
			0: 360,
			1: 1/360
		}
	},
	area: {
		// FIRST VALUE: CONVERT TO MILIMITER
		// SECOND VALUE: CONVERT FROM MILIMITER TO THE ACTUAL MEASURE

		//milimiter
		0: {
			0: 1,
			1: 1
		},
		//centimeter
		1: {
			0: 10,
			1: 0.1
		},
		//meter
		2: {
			0: 1000,
			1: 0.001
		},
		//quilometer
		3: {
			0: 1e+6,
			1: 1e-6
		},
		//hectare
		4: {
			0: 1e+10,
			1: 1e-10
		},
		//inch
		5: {
			0: 25.4,
			1: 0.0393701
		},
		//feet
		6: {
			0: 304.8,
			1: 0.00328084
		},
		//yard
		7: {
			0: 0.00109361,
			1: 914.4
		},
		//mile
		8: {
			0: 1.609e+6,
			1: 1.609e-6
		},
		//acre
		9: {
			0: 2.47105e+10,
			1: 2.47105e-10
		}
	},
	dataStorage: {
		// FIRST VALUE: CONVERT TO BIT
		// SECOND VALUE: CONVERT FROM BIT TO THE ACTUAL STORAGE

		//bit
		0: {
			0: 1,
			1: 1
		},
		//kilobit
		1: {
			0: 1000,
			1: 0.001
		},
		//megabit
		2: {
			0: 1e+6,
			1: 1e-6
		},
		//gigabit
		3: {
			0: 1e+9,
			1: 1e-9
		},
		//terabit
		4: {
			0: 1e+12,
			1: 1e-12
		},
		//petabit
		5: {
			0: 1e+15,
			1: 1e-15
		},
		//exabit
		6: {
			0: 1e+18,
			1: 1e-18
		},
		//zettabit
		7: {
			0: 1e+21,
			1: 1e-21
		},
		//yottabit
		8: {
			0: 1e+24,
			1: 1e-24
		},
		//byte
		9: {
			0: 8,
			1: 1/8,
		},
		//kilobyte
		10: {
			0: 8000,
			1: 1/8000
		},
		//megabyte
		11: {
			0: 1.25e+7,
			1: 1.25e-7 
		},
		//gigabyte
		12: {
			0: 1.25e+10,
			1: 1.25e-10
		},
		//terabyte
		13: {
			0: 1.25e+13,
			1: 1.25e-13
		},
		//petabyte
		14: {
			0: 1.25e+16,
			1: 1.25e-16
		},
		//exabyte
		15: {
			0: 1.25e+19,
			1: 1.25e-19
		},
		//zettabyte
		16: {
			0: 1.25e+22,
			1: 1.25e-22
		},
		//yottabyte
		17: {
			0: 1.25e+25,
			1: 1.25e-25
		},
		//kibibyte
		18: {
			0: 8192,
			1: 1/8192
		},
		//mebibyte
		19: {
			0: 1.19209e+7,
			1: 1.19209e-7
		},
		//gibibyte
		20: {
			0: 1.16415e+10,
			1: 1.16415e-10
		},
		//tebibyte
		21: {
			0: 1.13687e+13,
			1: 1.13687e-13
		},
		//pebibyte
		22: {
			0: 1.11022e+16,
			1: 1.11022e-16
		},
		//exbibyte
		23: {
			0: 1.0842e+19,
			1: 1.0842e-19
		},
		//zebibyte
		24: {
			0: 1.05879e+22,
			1: 1.05879e-22
		},
		//yobibyte
		25: {
			0: 1.03398e+25,
			1: 1.03398e-25
		}
	},
	length: {
		// FIRST VALUE: CONVERT TO NANOMETER
		// SECOND VALUE: CONVERT FROM NANOMETER TO THE ACTUAL LENGTH

		//nanometer
		0: {
			0: 1,
			1: 1
		},
		//micrometer
		1: {
			0: 1000,
			1: 0.001
		},
		//milimiter
		2: {
			0: 1e+6,
			1: 1e-6
		},
		//centimeter
		3: {
			0: 1e+7,
			1: 1e-7
		},
		//inch
		4: {
			0: 3.937e+8,
			1: 3.937e-8
		},
		//feet
		5: {
			0: 3.2808e+9,
			1: 3.2808e-9
		},
		//yard
		6: {
			0: 1.0936e+9,
			1: 1.0936e-9
		},
		//meter
		7: {
			0: 1e+9,
			1: 1e-9
		},
		//quilometer
		8: {
			0: 1e+12,
			1: 1e-12
		},
		//mile
		9: {
			0: 6.2137e+13,
			1: 6.2137e-13
		},
		//nautic mile
		10: {
			0: 5.3996e+13,
			1: 5.3996e-13
		}
	},
	mass: {
		// FIRST VALUE: CONVERT TO MICROGRAM
		// SECOND VALUE: CONVERT FROM MICROGRAM TO THE ACTUAL MASS

		//MICROGRAM
		0: {
			0: 1,
			1: 1,
		},
		//MILIGRAM
		1: {
			0: 1000,
			1: 0.001
		},
		//GRAM
		2: {
			0: 1e+6,
			1: 1e-6
		},
		//KILOGRAM
		3: {
			0: 1e+9,
			1: 1e-9
		},
		//TONNE
		4: {
			0: 1e+12,
			1: 1e-12
		},
		//OUNCE
		5: {
			0: 2.835e+7,
			1: 2.835e-7
		},
		//POUND
		6: {
			0: 4.536e+8,
			1: 4.536e-8
		},
		//STONE
		7: {
			0: 6.35e+9,
			1: 6.35e-9
		},
		//LONG TON
		8: {
			0: 1.016e+12,
			1: 1.016e-12
		},
		//SHORT TON
		9: {
			0: 9.072e+11,
			1: 9.072e-11
		}
	},
	time: {
		// FIRST VALUE: CONVERT TO DAY
		// SECOND VALUE: CONVERT FROM DAY TO THE ACTUAL TIME

		//NANOSECOND
		0: {
			0: 8.64e-13,
			1: 8.64e+13
		},
		//MICROSECOND
		1: {
			0: 8.64e-10,
			1: 8.64e+10
		},
		//MILISECOND
		2: {
			0: 8.64e-7,
			1: 8.64e+7
		},
		//SECOND
		3: {
			0: 86400,
			1: 1/86400
		},
		//MINUTE
		4: {
			0: 1/1440,
			1: 1440
		},
		//HOUR
		5: {
			0: 1/24,
			1: 24
		},
		//DAY
		6: {
			0:  1,
			1:  1
		},
		//WEEK
		7: {
			0: 1/7,
			1: 7
		},
		//MONTH
		8: {
			0: 1/30,
			1: 30
		},
		//YEAR (365)
		9: {
			0: 1/365,
			1: 365
		},
		//DECADE
		10: {
			0: 1/3650,
			1: 3650
		},
		//CENTURY
		11: {
			0: 1/36500,
			1: 36500
		}
	}
};

moneyParams = {
	brazil: [100, 50, 20, 10, 5, 2, 1, .5, .25, .10, .05, .01],
	us: [100, 50, 20, 10, 5, 2, 1, 1, .5, .25, .10, .05, .01]
}

function normalizeStr(s) {
	return s.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
}

function gbi(e) {
	//GET ELEMENT BY ID
	return document.getElementById(e);
}

function ac(e, c) {
	//ADD A CLASS TO A ELEMENT
	t = gbi(e);
	if (t.classList != c)
		t.classList.add(c);
}

function rc(e, c) {
	//REMOVE A CLASS TO A ELEMENT
	t = gbi(e);
	if (t.classList == c)
		t.classList.remove(c);
}

function tc(e, c) {
	//TOGGLE CLASS
	t = gbi(e);
	t.classList.toggle(c);
}

function gve(e) {
	//GET VALUE OF ELEMENT
	return gbi(e).value;
}

function gvp(m) {
	//GET VALUES FROM ELEMENTS IN THE PAGE
	values = [];

	for(i = 0; i < m; i++) {
		x = "v"+i;
		values[i] = Number(gve(x));
	}

	return values;
}

function cve(e, v) {
	//CHANGE VALUE OF A ELEMENT
	gbi(e).value = v;
}

function proportion() {
	//PROPORTIONAL
	values = gvp(3);
	cve("v3", (values[1]*values[2])/values[0]);
}

function imc() {
	r = 0;
	values = gvp(3);
	system = gve("system");
	total = 0;

	if(system == "metric") {
		values[2] *= 0.01;
		total = values[0]/(values[2]*values[2]);
	} else {
		if(values[0] != 0 && values[1] != 0 && values[2] != 0) {
			values[2] += values[1]*12;
			total = (values[0]/Math.pow(values[2], 2))*703;
		}
	}
	imcValue = 0;

	if(total < 18.5) {
		imcValue = 0;
	} else if(total < 25) {
		imcValue = 1;
	} else if(total < 30) {
		imcValue = 2;
	} else if(total < 35) {
		imcMessage = 3;
	} else if(total < 40) {
		imcValue = 4;
	} else {
		imcValue = 5;
	}

	cve("v3", total);
}

function moneyCalculator() {
	max = gve("max");
	locale = gve("locale");
	values = gvp(max);
	total = 0;

	for(i = 0; i < max; i++) {
		total += values[i]*moneyParams[locale][i];
	}
	cve("v"+max, parseFloat(total).toFixed(2));
}

function numericBase(opt) {
	initial = gve("v"+opt);
	
	initial = new Number(parseInt(initial, opt+2));
	for(i = 0; i < 15; i++) {
		if(opt != i) {
			x = "v"+i;
			cve(x, initial.toString(i+2));
		}
	}
}

function unitConvert(opt) {
	max = gbi("max").value;
	type = gbi("type").value;
	initial = gve("v"+opt);

	initial *= conversionValues[type][opt][0];
	for(i = 0; i < max; i++) {
		if(opt != i) {
			x = "v"+i;
			cve(x, initial*conversionValues[type][i][1]);
		}
	}
}

function countChars(x) {
	gbi("v0").innerText = x;
}

function search(v) {
	v = normalizeStr(v.toLowerCase());
	opts = document.querySelectorAll('.card');
	
	for (var i = 0; i < opts.length; i++) {
		if (!v || normalizeStr(opts[i].textContent.toLowerCase()).indexOf(v) > -1) {
		  opts[i].style['display'] = 'flex';
		} else {
		  opts[i].style['display'] = 'none';
		}
	}
}

function prop() {
	tc("a1", "hidden");
	tc("a2", "hidden");
	setTimeout(() => {  prop(); }, 7000);
}
