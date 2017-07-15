// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
//
// Implementacao indexar coordenada uv em imagem de xadrez
//
// tags: acesso pixel, texture, uv
//
// Referencia Shirley, Peter
(function() {
    function TextureMapping() {
	this.w = 3;
	this.h = 3;
	this.data = [[1.0, 0.0, 1.0 ],
		     [0.0, 1.0, 0.0 ],
		     [1.0, 0.0, 1.0 ]];
    }

    TextureMapping.fract = function(x) {
	if (x > 0) {
	    return x - Math.trunc(x);
	}
	if (x < 0) {
	    throw "Valor negativo invalido";
	}
	return x;
    };

    TextureMapping.prototype.c = function(u, v) {
	var x = TextureMapping.fract(u);
	var y = TextureMapping.fract(v);
	x = Math.floor(x * this.w);
	y = Math.floor(y * this.h);

	return this.data[y][x];
    }

    function render() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	var w = canvas.width;
	var h = canvas.height;
	var imageData = ctx.createImageData(w,h);
	var tex = new TextureMapping;

	canvasutil.init(canvas);
	ctx.clearRect(0,0,w,h);

	for (var i = 0; i < h; i++) {
	    for (var j = 0; j < w; j++) {
		var c = tex.c(i/h, j/w);
		canvasutil.putpixel(i, j, c * 255, c * 255, c * 255, 255);
	    }
	}
	canvasutil.draw();
    }
    window.addEventListener("load", render);
}());
// @license-end
