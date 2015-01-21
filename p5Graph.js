

/*function p5Graph(){
	this.pos = createVector(0,0);
}*/

function p5Bar(){
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
	this.descriptor.setValue(32);
	this.descriptor.setTitle('Title');

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

	// temporary to test this out
	this.value = 10;
	this.title = "heading" + '<br/>';

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

function p5Axis(){
	// position values
	this.display = function(){
		line(10,80);
	}
}