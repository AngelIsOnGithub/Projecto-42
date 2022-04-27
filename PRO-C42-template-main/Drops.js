class drops{

constructor(x,y){

    this.rain=Bodies.circle(x,y, 10);
    World.add(world, this.rain);

}
update(){
if(this.rain.position.y > height){

    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
}

}
display(){
fill("red");
    var pos = this.rain.position;
ellipse(pos.x, pos.y, 10,10);

}


}