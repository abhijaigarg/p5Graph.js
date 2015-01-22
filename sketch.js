function setup(){
	//createCanvas(1000,1000);
   
   	// there is a 100x100 canvas
   	createCanvas(500,500);

   	graph = new p5Graph(100,10,100,10);
   	
   	graph.add(32,'0-10');
   	graph.add(54);
   	graph.add(43);
   	graph.add(100);
   	graph.add(23);
   	graph.add(9);
   	graph.add(56);


   	//x = new p5Axis(20,width-10, 5, 10, 'x');
    //y = new p5Axis(20,width -10, 2, 8,'y');
    //	bar = new p5Bar(232, 'title of the bar');

	//createCanvas(bar.getWidth(), bar.getHeight());
}

function draw(){
	//background(200);
	//x.display();
	//y.display();

	graph.display();

	//graph.setXAxis.setAxisColor();
	//bar.display();
}