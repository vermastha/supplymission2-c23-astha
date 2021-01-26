class Wall{
    constructor(x, y, w, h){

        var options={
            isStatic:true,
            friction:1
        }
        this.body=Bodies.rectangle(x, y, w, h);
        this.w=w;
        this.h=h;
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        push()
        fill("red")
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
        pop();
    }
}