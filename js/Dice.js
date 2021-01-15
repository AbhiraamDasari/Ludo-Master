class Dice{
    constructor(){
     
     
    }
  display(){
    dice = createSprite(100,200,45,45);
   dice.addImage("diceimgt",diceimg);
   
   
  
  
  }
  rotation(){
    dice = createSprite(100,400,45,45);
    var rand = Math.round(random(1,6));
   console.log(rand);
   switch(rand){
     case 1: dice.addImage("diceimgg",diceimg1);
     break;

     case 2: dice.addImage("diceimg2",diceimg2);
     break;
    
     case 3: dice.addImage("diceimg3",diceimg3);
     break;
    
     case 4: dice.addImage("diceimg4",diceimg4);
     break;

     case 5: dice.addImage("diceimg5",diceimg5);
     break;

     case 6: dice.addImage("diceimg6",diceimg6);
     break;

     default: break;

   }
   dice.scale = 0.5;
  }
}