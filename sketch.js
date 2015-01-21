function setup(){
	//createCanvas(1000,1000);
   
   	// there is a 100x100 canvas
   	createCanvas(500,500);
   	x = new p5Axis(20,width-10, 2000, 5, 'x');
    y = new p5Axis(20,width -10, 80, 5, 'y');
   //	bar = new p5Bar(232, 'title of the bar');

	//createCanvas(bar.getWidth(), bar.getHeight());
}

function draw(){
	//background(200);
	x.display();
	y.display();

	//bar.display();
}