function calculateForce() {
	var m = parseFloat(document.getElementById("m").value),
		a = parseFloat(document.getElementById("a").value),
		result = (m * a);
	document.getElementById("f").value = result.toFixed(2);
}

function calculateDisplacement() {
	var v = parseFloat(document.getElementById("v").value),
		t = parseFloat(document.getElementById("t").value),
		a = parseFloat(document.getElementById("a2").value),
		result = ((v * t) + (0.5 * a * (Math.pow(t, 2))));
	document.getElementById("d").value = result.toFixed(2);
}

function calculateQuadratic() {
	var a = parseFloat(document.getElementById("a3").value),
		b = parseFloat(document.getElementById("b").value),
		c = parseFloat(document.getElementById("c").value),
		d = (Math.pow(b, 2) - (4 * a * c));
		posResult = ((-b) + Math.sqrt(d))/(2 * a);
		negResult = ((-b) - Math.sqrt(d))/(2 * a);
	document.getElementById("pos").value = posResult.toFixed(2);
	document.getElementById("neg").value = negResult.toFixed(2);
}

function calculateAnnuity() {
	var c = parseFloat(document.getElementById("c2").value),
		r = parseFloat(document.getElementById("r").value),
		n = parseFloat(document.getElementById("n").value),
		result = (c * ((1 - Math.pow(1 + r, -n))/r));
	document.getElementById("p").value = result.toFixed(2);
}