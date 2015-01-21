var graph;

function setup(){
	//createCanvas(1000,1000);
   
   // there is a 100x100 canvas
   createCanvas(500,500);
	bar = new p5Bar(10, 'title');

	//createCanvas(bar.getWidth(), bar.getHeight());
}

function draw(){
	bar.display();
}