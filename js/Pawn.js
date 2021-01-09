class Pawns{
    constructor(x,y,color){
   this.x = x;
   this.y = y;
   this.color = color;
   this.width = 34;
   this.height = 50;
   //this.image = loadImage("");
   this.pawn = createSprite(this.x,this.y,this.width,this.height);
   this.pawn.ShapeColor = this.color;
}
  

    movementsofPawns(){
        if(keyPressed (UP_ARROW)){
            this.pawn.y = this.pawn.y- 5;
        }

        if(keyPressed (LEFT_ARROW)){
            this.pawn.x = this.pawn.x -5;
        }
        if(keyPressed(RIGHT-ARROW)){
            this.pawn.x = this.pawn.x +5;
        }
    }
}
