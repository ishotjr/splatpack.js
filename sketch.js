
var r0,
	g0,
	b0;

var first = true;


function setup() {
	createCanvas(320, 240);
}

function draw() {
	// TODO: filter mouseIsPressed vs. noisy/multiple?
	if (mouseIsPressed) {

		console.log("mouseIsPressed");

		var x = mouseX;
		var y = mouseY;
		var n = 2 + (rnd(5));
		var m = 4 + (rnd(5));

		console.log("n=" + n);
		console.log("m=" + m);

		if (first) {

			randomSeed((x * 16) + (y * 16)); // TODO: incorporate time later?

			// random dark-ish background
		    r0 = 32 + rnd(95);
		    g0 = 32 + rnd(95);
		    b0 = 32 + rnd(95);
		    background(r0, g0, b0);

		    first = false;
		}

      	// scatter several circles around point
		for (var j = 1; j <= m; j++) {

			console.log("j=" + j);

	        var xm = x + (rnd(4) * m) * (1 - rnd(1)); // TODO: need to make this 0/1, right?
	        var ym = y + (rnd(4) * m) * (1 - rnd(1)); // (will always be 0 as is?)

        	// draw 2-6 concentric circles of different blue-ish colors
			for (var i = 1; i <= n; i++) {

				console.log("i=" + i);

				var r = 255 - r0 + 24 + (rnd(n * 4));
				if (r > 255) { r = 255 };
				var g = 255 - g0 + 24 + (rnd(n * 4));
				if (g > 255) { g = 255 };
				var b = 255 - b0 + 24 + (rnd(n * 4));
				if (b > 255) { b = 255 };

				stroke(r, g, b);
				fill(r, g, b);
				
				var d = height / (i * 6) + (rnd(5) * height/((i + 1) * 4));

				ellipse(xm, ym, d/2, d/2);
				console.log(xm + "|" + ym + "|" + d/2);
			}

		}
	} else {
		//ellipse(mouseX, mouseY, 10, 10)
	}
}

// random int like BASIC RND
function rnd(max) {
	return int(random(max));
}
