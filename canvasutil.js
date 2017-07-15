// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
var canvasutil = (function () {
    var imagedata;
    var canvas;
    var ctx;
    var w;
    var h;
    
    function putpixel(i, j, r, g, b, a)
    {
	imagedata.data[ (i*w + j) * 4     ] = r;
	imagedata.data[ (i*w + j) * 4 + 1 ] = g;
	imagedata.data[ (i*w + j) * 4 + 2 ] = b;
	imagedata.data[ (i*w + j) * 4 + 3 ] = a;
    }

    function init(canvas_)
    {
	canvas = canvas_;
	ctx = canvas.getContext('2d');
	w = canvas.width;
	h = canvas.height;
	imagedata = ctx.createImageData(w, h);	
    }

    function draw()
    {
	var ctx = canvas.getContext('2d');
	ctx.putImageData(imagedata, 0, 0);
    }
    
    var module = {};
    module.putpixel = putpixel;    
    module.init = init;
    module.draw = draw;
    return module;
}());
// @license-end
