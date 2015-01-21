function setup(){
	//createCanvas(1000,1000);
   
   	// there is a 100x100 canvas
   	createCanvas(250,250);
   	x = new p5Axis(20,width-10, 100, 5, 'x');
    y = new p5Axis(20,width -10, 80, 5, 'y');

    background(200);

	//createCanvas(bar.getWidth(), bar.getHeight());
}

function draw(){
	//background(200);
	x.display();
	y.display();
}