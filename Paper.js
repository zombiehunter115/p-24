class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution: 0,
            friction: 0.5,
            density:0.2,
            gravity:0.5,
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        push()
        translate (this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS)
         ellipse(this.body.position.x,this.body.position.y,this.radius)
        pop ()

    }

}