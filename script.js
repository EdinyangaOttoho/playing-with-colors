function toRGBA(color) {
    var cvs, ctx;
    cvs = document.createElement('canvas');
    cvs.height = 1;
    cvs.width = 1;
    ctx = cvs.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
    cvs.remove();
}
function invertAll(x) {
	var allelements = document.querySelectorAll("*");
	for (let i = 0; i < allelements.length;i++) {
		var e = allelements[i];
		if (window.getComputedStyle(e).getPropertyValue("background-color") != '') {
			manipulateBackColor(e, toRGBA(window.getComputedStyle(e).getPropertyValue("background-color")));
		}
		if (window.getComputedStyle(e).getPropertyValue("color") != '') {
			manipulateColor(e, toRGBA(window.getComputedStyle(e).getPropertyValue("color")));
		}
	}
}
function manipulateColor(x, y) {
	var r = y[0];
	var g = y[1];
	var b = y[2];
	var a = y[3];
	new_r = 255 - r;
	new_g = 255 - g;
	new_b = 255 - b;
	var array = [new_r, new_g, new_b, a];
	var rgba = 'rgba('+ array.join(",") +')';
	x.style.color = rgba;
}
function manipulateBackColor(x, y) {
	var r = y[0];
	var g = y[1];
	var b = y[2];
	var a = y[3];
	new_r = 255 - r;
	new_g = 255 - g;
	new_b = 255 - b;
	var array = [new_r, new_g, new_b, a];
	var rgba = 'rgba('+ array.join(",") +')';
	x.style.backgroundColor = rgba;
}
function evenGradientFill(element, type=0, deg=45) {
	var rgba = toRGBA(window.getComputedStyle(element).getPropertyValue("background-color"));
	var stop1 = 'rgb('+ rgba.join(",") +')';
	var stop2 = 'rgb('+ [Math.round(rgba[0] - (0.25 * rgba[0])), Math.round(rgba[1] - (0.25 * rgba[1])), Math.round(rgba[2] - (0.25 * rgba[2]))].join(",") +')';
	var stop3 = 'rgb('+ [Math.round(rgba[0] - (0.5 * rgba[0])), Math.round(rgba[1] - (0.5 * rgba[1])), Math.round(rgba[2] - (0.5 * rgba[2]))].join(",") +')';	
	if (type == 0) {
		element.style.backgroundImage = 'linear-gradient('+ deg +'deg, '+ stop1 +', '+ stop2 +', '+ stop3 +')';
		element.style.backgroundSize = '100% 100%';
	}
	else {
		element.style.backgroundImage = 'radial-gradient('+ stop1 +', '+ stop2 +', '+ stop3 +')';
		element.style.backgroundSize = '100% 100%';
	}
}