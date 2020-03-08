function gbi (e) {
	return document.getElementById(e);
}

function ac (e, c) {
	t = gbi(e);
	if (t.classList != c)
		t.classList.add(c);
}

function rc (e, c) {
	t = gbi(e);
	if (t.classList == c)
		t.classList.remove(c);
}

function tc(e, c) {
	t = gbi(e);
	t.classList.toggle(c);
}

function menuMobile() {
	tc("sitemenu", "is-active");
}
		
values = [];
for(i=0;i<13;i++) {
	values[i] = 0;
}
		
function sum(i, v) {
	values[i]  = v;
	total = 0;
	for(i=0;i<12;i++) {
		total += values[i];
	}
	gbi("total").value = parseFloat(total).toFixed(2);
}

function thirds(i, v) {
	values[i]  = v;
	gbi("total").value = (values[1]*values[2])/values[0];
}

function tab(t, m) {
	for(i=0;i<m;i++) {
		if(t != i) {
			ac("tab"+i,"is-hidden");
			rc("btab"+i, "is-active");
		} else {
			rc("tab"+i,"is-hidden");
			ac("btab"+i, "is-active");
		}
	}
}

function imc(i, v) {
	r = 0;
	values[i]  = v;
	total = values[0]/(values[1]*values[1]);
	gbi("total").value = total;
	
	for(i=0;i<6;i++)
		rc("imc"+i,"has-background-success");
	
	if(total < 18.5)
		r = 0;
	else if(total < 25)
		r = 1;
	else if(total < 30)
		r = 2;
	else if(total < 35)
		r = 3;
	else if(total < 40)
		r = 4;
	else
		r = 5;
	ac("imc" + r, "has-background-success");
}

function angle(o, v) {
	elems = [gbi("v0"), gbi("v1"), gbi("v2"), gbi("v3"), gbi("v4"), gbi("v5"), gbi("v6")];
	x = 0;
	
	if(o == 0) {
		x = elems[0].value*180/π;
	} else if (o == 1) {
		x = elems[1].value;
	} else if (o == 2) {
		x = elems[2].value/60;
	} else if (o == 3) {
		x = elems[3].value/3600;
	} else if (o == 4) {
		x = elems[4].value*60;
	} else if (o == 5) {
		x = elems[5].value*90;
	} else if (o == 6) {
		x = elems[6].value*360;
	}
	
	elems[0].value = x*(180/π);
	elems[1].value = x;
	elems[2].value = 60;
	elems[3].value = 60;
}

function smc() {
	t = new Date();
	t = t.getDate() + "/" + t.getMonth() + "/" + t.getYear() + " - " + t.getHours() + ":" + t.getMinutes();
	d = {};
	d.timestamp = t;
	for(i=0;i<11;i++) {
		d["v"+ i] = gbi("v"+i).value;
	}
	d.total= gbi("total").value;	
	
	if(localStorage.smc == null){
		localStorage.smc = JSON.stringify(d);
	} else {
		ld = JSON.parse(localStorage.smc);
		localStorage.smc = JSON.stringify(ld.push(d));
	}
}
