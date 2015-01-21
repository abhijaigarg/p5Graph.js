/*function p5Graph(){
	this.pos = createVector(0,0);
}*/

function p5Bar(){
	this.position = createVector(0, 0);
	this.dimension = createVector(20,80);
	this.barColor = createVector(0,0,0);
	this.strokeColor = createVector(0,0,0);

	this.setPosition = function(X,Y){
		this.pos.x = X || width/2;
		this.pos.y = Y || height/2;
	}

	this.setFill = function(R,G,B){
		this.barColor.x = R || 171;
		this.barColor.y = G || 14;
		this.barColor.z = B || 23;
	}

	this.setStroke = function(R,G,B){
		this.strokeColor.x = R || 255;
		this.strokeColor.y = G || 255;
		this.strokeColor.z = B || 255;
	}


	this.setPosition();
	this.setFill();
	this.setStroke();
	
	this.display = function(){
		fill(this.barColor.x, this.barColor.y, this.barColor.z);
		stroke(this.strokeColor.x, this.strokeColor.y, this.strokeColor.z);
		rect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
	}
}

/*function p5Axis(){
	// position values
	this.pos = createVector(0,0);
	}
}*/