class Box{
    constructor(x,y,w,h) {
        var box_options={
            restitution:1.9
            }
      Box = Bodies.rectangle(x,y,w,h,box_options);
      this.w = RandomNumber(10,50);
      this.h = RandomNumber(10,50);
      this.x=200;
      this.y=180;
      World.add(world,box);
    }
    display(){
    
      rectMode(CENTER);
      fill("white");
    rect(this.x, this.y, this.w,this.h);
    }
  };