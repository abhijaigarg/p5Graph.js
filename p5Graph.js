

/*function p5Graph(){
	this.pos = createVector(0,0);
}*/

function p5Bar(value, title){
	this.position = createVector(0, 0, 0);			// vector to set position of bar
	this.dimension = createVector(20,80, 0);		// vector to set dimensions of bar
	this.barColor = createVector(0,0,0);			// vector to set r,g,b values of bar color
	this.strokeColor = createVector(0,0,0);			// vector to set r,g,b values of stroke color

	
	this.descriptor = new p5Descriptor();

	// setter function for position
	this.setPosition = function(X,Y,Z){
		this.position.x = typeof X !== 'undefined' ? X : width/2;	// set default if no value provided
		this.position.y = typeof Y !== 'undefined' ? Y : height/2;	// set default if no value provided
		this.position.z = typeof Z !== 'undefined' ? Z : 0;			// set default if no value provided
	}

	// setter function for fill color r,g,b values
	this.setFill = function(R,G,B){
		this.barColor.x = typeof R !== 'undefined' ? R : 171;		// set default if no value provided
		this.barColor.y = typeof G !== 'undefined' ? G : 14;		// set default if no value provided
		this.barColor.z = typeof B !== 'undefined' ? B : 23;		// set default if no value provided
	}

	// setter function for stroke color r,g,b values
	this.setStroke = function(R,G,B){
		this.strokeColor.x = typeof R !== 'undefined' ? R : 255;	// set default if no value provided
		this.strokeColor.y = typeof G !== 'undefined' ? G : 255;	// set default if no value provided
		this.strokeColor.z = typeof B !== 'undefined' ? B : 255;	// set default if no value provided
	}

	// setter function for dimensions
	this.setDimension = function(W,H,D){
		this.dimension.x = typeof W !== 'undefined' ? W : 20;		// set default if no value provided
		this.dimension.y = typeof H !== 'undefined' ? H : 80;		// set default if no value provided
		this.dimension.z = typeof D !== 'undefined' ? D : 0;		// set default if no value provided
	}

	// call the setters and instantiate default values
	this.setPosition();
	this.setFill();
	this.setStroke();
	this.setDimension();

	// set the values for the descriptor
	if(typeof value !== 'undefined'){
		this.descriptor.setValue(value);
	}
	if(typeof title !== 'undefined'){
		this.descriptor.setTitle(title);
	}

	this.display = function(){
		// set the fill color
		fill(this.barColor.x, this.barColor.y, this.barColor.z);

		// set the stroke color
		stroke(this.strokeColor.x, this.strokeColor.y, this.strokeColor.z);

		// draw the rectangle
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);

		if(this.mouseOver(mouseX,mouseY) === true){
			this.descriptor.display(mouseX, mouseY);
		} 
		else{
			this.descriptor.hide();
		}
	}

	this.mouseOver = function(X, Y){
		if((X >= this.position.x && X <= this.position.x + this.dimension.x) && 
			(Y >= this.position.y && Y <= this.position.y + this.dimension.y)){
			return true;
		}

		return false;
	}
}

function p5Descriptor(){

	// setter function for value
	this.setValue = function(value){
		this.value = typeof value !== 'undefined' ? value : '';
		//this.box = this.box.value(23);
		//this.box.value( this.title + '' + this.value);
	}

	// setter function for title
	this.setTitle = function(title){
		this.title = typeof title !== 'undefined' ? title + '<br/>' : '';
		//this.box.value(this.title + '' + this.value);
	}


	// set default values for value and title
	this.setValue();
	this.setTitle();

	this.box = createDiv(this.title + '' +  this.value);	// the actual div where everything is displayed
	this.box.hide();										// hide the div by default


	// setter function for position
	this.setPosition = function(x,y){	
		this.box.position(x,y);
	}

	// style the box with the 
	this.styleBox = function(){
		this.box.style('background-color', '#ffffff');
		this.box.style('border', 'solid thin #e3e3e3');
		this.box.style('border-radius',5);
		this.box.style('padding', '5 5 5 5');
		this.box.style('font-size', 10);
		this.box.style('text-align','center');
		this.box.style('font-family', 'Arial, Helvetica, sans-serif');
	}

	// style the box
	this.styleBox();

	// update display values
	this.updateDisplayValues = function(){
		this.box.html(this.title + '' +  this.value);
	}
	
	// display function
	this.display = function(x,y){
		this.updateDisplayValues();
		this.setPosition(x,y - this.box.elt.offsetHeight);
		this.box.show();
	}

	// hide function
	this.hide = function(){
		this.box.hide();
	}
}

function p5Axis(x,y,a,b,type){


	/* values needed
		this.maxVal: to figure out the m
		this.interval:
		this.numOfIntervals:
		this.maxAllowed:
		this.position:
		this.endposition
		this.title

	*/
	/* store the position */

	this.position = createVector (0,0);
	this.title = createDiv();

	/*
		if a > b
				a: max value of the axis
				b: number of intervals on the axis
		if a <= b
				a: value of each interval
				b: number of intervals

	*/
	this.type = type;
	if (a > b){
		this.maxVal = a;
		this.interval = this.maxVal / b;
		this.numOfIntervals = b;
	}
	else if( a <= b){
		this.maxVal = a * b;
		this.interval = a;
		this.numOfIntervals = b;
	}	

	// maximum allowed value by default

	this.maxAllowed = function(value){
		// leave 5 px for display box to show in case of  bar overload
		this.maxAllowed = typeof value !== 'undefined' ? value : (this.type === 'x' ? (width - this.position.x - 5) : (this.position.y - 5));
	}

	this.setPosition = function(x, y){
		this.position.x = x;
		this.position.y = y;
		if(this.type == 'x'){
			this.title.position((this.position.x + this.maxVal), y + 10);
		}
		else if(this.type === 'y'){
			this.title.position(x - 20, (this.position.y - this.maxVal));
		}

	}

	this.setTitle = function(title){
		this.title.html(typeof title !== 'undefined' ? title : (this.type === 'x' ? 'X Axis' : 'Y Axis'));
	}

	this.styleTitle = function(){
		this.title.style('font-size', 12);
		this.title.style('text-align','center');
		this.title.style('font-family', 'Arial, Helvetica, sans-serif');

		if(this.type === 'y'){
			this.title.style('-webkit-transform','rotate(-90deg)');
			this.title.style('-moz-transform','rotate(-90deg)');
			this.title.style('-ms-transform','rotate(-90deg)');
			this.title.style('-o-transform','rotate(-90deg)');
			this.title.style('transform','rotate(-90deg)');
			this.title.style('filter','rotate(-90deg)'); /*Mandatory for IE9 to show the vertical text correctly*/ 
		}
	}
	this.setTitle()
	this.styleTitle();
	this.setPosition(x,y);
	this.maxAllowed();

	this.mapValues = function(){
		if(this.type === 'x'){
			this.maxVal = map(this.maxVal, 0, this.maxVal, this.position.x, this.maxAllowed);
			this.interval = map(this.interval, 0, this.maxVal, this.position.x, this.maxAllowed);
		}
		else if(this.type === 'y'){
			this.maxVal = map(this.maxVal, 0, this.maxVal, this.position.y, this.maxAllowed);
			this.interval = map(this.interval, 0, this.maxVal, this.position.y, this.maxAllowed);
		}
		
	}

	this.mapValues();

	this.getEndPositions = function(){
		if(this.type == 'x'){
			this.endPosition = createVector(this.position.x + this.maxVal,this.position.y);
		}
		else if(this.type == 'y'){
			this.endPosition = createVector(this.position.x,this.position.y - this.maxVal)
		}
	}

	this.getEndPositions();


	this.display = function(){
		line(this.position.x,this.position.y,this.endPosition.x, this.endPosition.y);
	}
	
}