class Part{

constructor(x, y, r){

var options={

    restitution : 0.5,
    friction : 0.1,
    density : 1.3

}

this.x=x;
this.y=y;
this.r=r;

this.body = Bodies.circle(x, y,this.r, options);
this.color = color(random(0,255), random(0,255), random(0,255));
World.add(world, this.body);

}

display(){
 push();
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(pos.x, pos.y, this.r*2,this.r*2);
pop();
  }
}