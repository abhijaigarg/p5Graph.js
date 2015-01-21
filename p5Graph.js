
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

	// store the position

	this.position = createVector (0,0);
	this.title = createDiv();

	this.intervals = []

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
		this.max = a;
		this.maxVal = a;
		this.interval = this.max / b;
		this.intervalVal = this.interval;
		this.numOfIntervals = b;
	}
	else if( a <= b){
		this.max = a * b;
		this.maxVal = a * b;
		this.interval = a;
		this.intervalVal = this.interval;
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
			this.title.position((this.position.x + width/2), y + 20);
		}
		else if(this.type === 'y'){
			this.title.position(x - 30, (this.position.y - height/2));
		}

	}

	this.setTitle = function(title){
		this.title.html(typeof title !== 'undefined' ? title : (this.type === 'x' ? 'X Axis' : 'Y Axis'));
		this.title.style('z-index', 3);
	}

	this.styleTitleElements = function(element){
		element.style('font-size', 12);
		element.style('text-align','center');
		element.style('font-family', 'Arial, Helvetica, sans-serif');


		if(this.type === 'y'){
			element.style('-webkit-transform','rotate(-90deg)');
			element.style('-moz-transform','rotate(-90deg)');
			element.style('-ms-transform','rotate(-90deg)');
			element.style('-o-transform','rotate(-90deg)');
			element.style('transform','rotate(-90deg)');
			element.style('filter','rotate(-90deg)'); /*Mandatory for IE9 to show the vertical text correctly*/ 
		}
	}
	this.setTitle()
	this.styleTitleElements(this.title);
	this.setPosition(x,y);
	this.maxAllowed();

	this.mapValues = function(){
		if(this.type === 'x'){
			this.max = map(this.max, 0, this.max, this.position.x, this.maxAllowed);
			this.interval = this.max / this.numOfIntervals;
		}
		else if(this.type === 'y'){
			this.max = map(this.max, 0, this.max, this.position.y, this.maxAllowed);
			this.interval = this.max / this.numOfIntervals;
		}
		
	}

	this.mapValues();

	this.getEndPositions = function(){
		if(this.type == 'x'){
			this.endPosition = createVector(this.position.x + this.max,this.position.y);
		}
		else if(this.type == 'y'){
			this.endPosition = createVector(this.position.x,this.position.y - this.max)
		}
	}

	this.getEndPositions();

	this.getIntervals = function(){

		var x = this.type === 'x' ? this.position.x : this.position.x - 2;
		var y = this.type === 'x' ? this.position.y + 10 : this.position.y;

		for(var i=0; i <= this.numOfIntervals; i++){
			this.intervals.push(createDiv(i*this.intervalVal));


			this.intervals[this.intervals.length - 1].position(x,y);
			this.styleTitleElements(this.intervals[this.intervals.length - 1]);
			this.intervals[this.intervals.length - 1].style('font-size', 8);
			this.title.style('z-index', 1);

			x += this.type === 'x' ? this.interval : 0;
			y -= this.type === 'y' ? this.interval : 0;
		}
	}
	this.getIntervals();


	this.display = function(){
		line(this.position.x,this.position.y,this.endPosition.x, this.endPosition.y);
	}
	
}