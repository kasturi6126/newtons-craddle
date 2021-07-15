class rope{
	constructor(bodyA, pointB){
		var options = {
			bodyA: bodyA,
			pointB: pointB,
			stiffness: 0.04,
			length: 200
		}
		this.pointB = pointB
		this.rope = constraint.create(options);
        World.add(world,this.chain);
	}
	
    //create display() here 
	display(){
		if(this.chain.bodyA){
			var pointA = this.chain.bodyA.position;
			var pointB = this.pointB;
			strokeWeight(4);
			line(pointA.x, pointA.y, pointB.y, pointB.y);
		}
	}

}
