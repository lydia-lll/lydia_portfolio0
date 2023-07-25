let mobilenet;
let video;
let name = '';

window.setup = setup;
window.draw  = draw;
new p5();

function modelReady(){
	console.log('model is ready!!');
	mobilenet.predict(gotResults);
}

// function imageReady(){
// 	image(mouse,0,0,width,height);
// 	mobilenet.predict(mouse,gotResults);
// }

function gotResults(error, results){
	if(error){
		console.error(error);
	}else{
		//console.log(results);
		name = results[0].label;
		mobilenet.predict(gotResults);
	}

	
}

function setup() {
	var canvas = createCanvas(500,350);
	canvas.parent('sketch-holder');
	// put setup code here
	background(0);
	video = createCapture(VIDEO);
	video.hide();
	mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);

}

function draw() {
	// put drawing code here
	background(0);
	image(video,0,0);
	fill(255);
	textSize(40);
	text(name,10,height-20);
}