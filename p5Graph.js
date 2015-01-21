

/*function p5Graph(){
	this.pos = createVector(0,0);
}*/

function p5Bar(){
	this.position = createVector(0, 0, 0);			// vector to set position of bar
	this.dimension = createVector(20,80, 0);		//vector to set dimensions of bar
	this.barColor = createVector(0,0,0);			// vector to set r,g,b values of bar color
	this.strokeColor = createVector(0,0,0);			// vector to set r,g,b values of stroke color

	// setter function for position
	this.setPosition = function(X,Y,Z){
		this.position.x = typeof X !== 'undefined' ? X : width/2;
		this.position.y = typeof Y !== 'undefined' ? Y : height/2;
		this.position.z = typeof Z !== 'undefined' ? Z : 0;
	}

	// setter function for fill color r,g,b values
	this.setFill = function(R,G,B){
		this.barColor.x = typeof R !== 'undefined' ? R : 171;	// set default if no value provided
		this.barColor.y = typeof G !== 'undefined' ? G : 14;	// set default if no value provided
		this.barColor.z = typeof B !== 'undefined' ? B : 23;	// set default if no value provided
	}

	// setter function for stroke color r,g,b values
	this.setStroke = function(R,G,B){
		this.strokeColor.x = typeof R !== 'undefined' ? R : 255;// set default if no value provided
		this.strokeColor.y = typeof G !== 'undefined' ? G : 255;// set default if no value provided
		this.strokeColor.z = typeof B !== 'undefined' ? B : 255;// set default if no value provided
	}

	// setter function for dimensions
	this.setDimension = function(W,H,D){
		this.dimension.x = typeof W !== 'undefined' ? W : 20;	// set default if no value provided
		this.dimension.y = typeof H !== 'undefined' ? H : 80;	// set default if no value provided
		this.dimension.z = typeof D !== 'undefined' ? D : 0;	// set default if no value provided
	}


	this.setPosition();
	this.setFill();
	this.setStroke();
	this.setDimension();

	this.display = function(){
		fill(this.barColor.x, this.barColor.y, this.barColor.z);
		stroke(this.strokeColor.x, this.strokeColor.y, this.strokeColor.z);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);


	}

	this.mouseOver = function(X, Y){
		if((X >= this.position.x && X <= this.position.x + this.dimension.x) && 
			(Y >= this.position.y && Y <= this.position.y + this.dimension.y) &&
			(Z >= this.position.z && Z <= this.position.z + this.dimension.z)){
			return true;
		}

		return false;
	}
}

/*function p5Axis(){
	// position values
	this.pos = createVector(0,0);
	}
}*/