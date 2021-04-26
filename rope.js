class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offSset
        var options={
            bodyA:body1.
            bodyB.body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    //console.log(options);
    console.log(options);
    thid.rope=Constraint.create(options)
    World.add(world,this.rope)
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        
        var Anchor1X=pointA.x
        var Anchor1Y=pointB.y

        
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
    
}