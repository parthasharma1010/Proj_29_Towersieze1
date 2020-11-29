class Slingshot{
  constructor(bodyA,pointB){
    var options = {
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.04,
      length:10,
    }
    this.pointB = pointB;
    this.body=Constraint.create(options);
    World.add(world,this.body);
    polygon = Bodies.circle(50,200,50);
    World.add(world,polygon);
  }

 
  fly() {
    this.body.bodyA = null;
  
  }
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200});
  display(){
    if(this.body.bodyA) {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(1);
      stroke("grey");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }
    pop();
  }
}