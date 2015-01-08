var canvasWidth = 500,
    canvasHeight = 500,
	canvas,
	context;

function rotate() {
	
    // Clear the canvas
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	
    // Move registration point to the center of the canvas
	context.translate(canvasWidth/2, canvasWidth/2);
	
    // Rotate 1 degree
	context.rotate(Math.PI / 360);
    
	 // Move registration point back to the top left corner of canvas
	context.translate(-canvasWidth/2, -canvasWidth/2);
	
	context.fillStyle = "red";
	context.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/4, canvasHeight/4);

}

function prepareCanvas()
{
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	var canvasDiv = document.getElementById('canvasDiv');
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas1');
	canvasDiv.appendChild(canvas);
	
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	// Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");
	
	setInterval(rotate, 10);
}

window.onload = prepareCanvas();