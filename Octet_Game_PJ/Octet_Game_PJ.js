let elementsWithIon = [

  new Elemento(1,"H",0),
  new Elemento(3,"Li",0),
  new Elemento(4,"Be",0),
  new Elemento(5,"B",0),
  new Elemento(6,"C",0),
  new Elemento(7,"N",0),
  new Elemento(8,"O",0),
  new Elemento(9,"F",0),
  new Elemento(4,"Be",-1),
  new Elemento(5,"B",-1),
  new Elemento(5,"B",-2),
  new Elemento(6,"C",-1),
  new Elemento(6,"C",-2),
  new Elemento(6,"C",-3),
  new Elemento(7,"N",-1),
  new Elemento(7,"N",-2),
  new Elemento(7,"N",-3),
  new Elemento(8,"O",-1),
  new Elemento(8,"O",-2),
  new Elemento(8,"O",-3),
  new Elemento(9,"F",-1),
  new Elemento(9,"F",-2),
  new Elemento(9,"F",-3),
  new Elemento(3,"Li",1),
  new Elemento(3,"Li",2),
  new Elemento(3,"Li",3),
  new Elemento(4,"Be",1),
  new Elemento(4,"Be",2),
  new Elemento(4,"Be",3),
  new Elemento(5,"B",1),
  new Elemento(5,"B",2),
  new Elemento(5,"B",3),
  new Elemento(6,"C",1),
  new Elemento(6,"C",2),
  new Elemento(6,"C",3),
  new Elemento(7,"N",1),
  new Elemento(7,"N",2),
  new Elemento(8,"O",1),
  new Elemento(11,"Na",0),
  new Elemento(12,"Mg",0),
  new Elemento(13,"Al",0),
  new Elemento(14,"Si",0),
  new Elemento(15,"P",0),
  new Elemento(16,"S",0),
  new Elemento(17,"Cl",0),
  new Elemento(11,"Na",1),
  new Elemento(11,"Na",2),
  new Elemento(11,"Na",3),
  new Elemento(12,"Mg",1),
  new Elemento(12,"Mg",2),
  new Elemento(12,"Mg",3),
  new Elemento(13,"Al",1),
  new Elemento(13,"Al",2),
  new Elemento(13,"Al",3),
  new Elemento(14,"Si",1),
  new Elemento(14,"Si",2),
  new Elemento(14,"Si",3),
  new Elemento(15,"P",1),
  new Elemento(15,"P",2),
  new Elemento(16,"S",1),
  new Elemento(12,"Mg",-1),
  new Elemento(13,"Al",-1),
  new Elemento(13,"Al",-2),
  new Elemento(14,"Si",-1),
  new Elemento(14,"Si",-2),
  new Elemento(14,"Si",-3),
  new Elemento(15,"P",-1),
  new Elemento(15,"P",-2),
  new Elemento(15,"P",-3),
  new Elemento(16,"S",-1),
  new Elemento(16,"S",-2),
  new Elemento(16,"S",-3),
  new Elemento(17,"Cl",-1),
  new Elemento(17,"Cl",-2),
  new Elemento(17,"Cl",-3)
]

let elementsNotIon = [
  new Elemento(1,"H",0),
  new Elemento(3,"Li",0),
  new Elemento(4,"Be",0),
  new Elemento(5,"B",0),
  new Elemento(6,"C",0),
  new Elemento(7,"N",0),
  new Elemento(8,"O",0),
  new Elemento(9,"F",0),
  new Elemento(11,"Na",0),
  new Elemento(12,"Mg",0),
  new Elemento(13,"Al",0),
  new Elemento(14,"Si",0),
  new Elemento(15,"P",0),
  new Elemento(16,"S",0),
  new Elemento(17,"Cl",0)
]

let game;
let button1, button2, button3, button4;
let scene;

function setup() {
   createCanvas(700,700);
//   board = create2DArray(5,5);
//   createElement(board);
  button1 = new Button(width/4, height * 0.10, width/2, height * 0.20, "Normal", color(0,125,51), color(0,0,255));
//  button2 = new Button(width/4, height * 0.40, width/2, height * 0.20, "With Time", color(0,125,51), color(0,0,255));
  button3 = new Button(width/4, height * 0.70, width/2, height * 0.20, "With Ions", color(0,125,51), color(0,0,255));
  button4 = new Button(0, height * 0.95, width/10, height * 0.05, "Return", color(0,125,51), color(0,0,255));
  scene = 0;
}

function draw() {
   background(51);

   if(scene == 0)
   {
     button1.show();
     // button2.show();
     button3.show();
   }
   else
   {
     game.Show();
     button4.show();
   }
}

function mousePressed()
{
    if(scene == 0)
    {
      if(button1.isPressed())
      {
        scene = 1;
        game = new Game(false, false, elementsNotIon);
        game.createElement(game.board);
      }
      // if(button2.isPressed())
      // {
      //   scene = 2;
      //   game = new Game(false, true, elementsNotIon);
      //   game.createElement(game.board);
      // }
      if(button3.isPressed())
      {
        scene = 3;
        game = new Game(true, false, elementsWithIon);
        game.createElement(game.board);
      }
      // else if(button1.isPressed())
      // {
      //
      // }
    }
    else
    {
       if(button4.isPressed())
       {
          scene = 0;
          game.RemoveThings();
       }
    }
}

function keyPressed(){

  if(game == undefined || game == null)
    return;

   if(keyCode == DOWN_ARROW)
   {
      game.moveBoard(0);
   }
   else if(keyCode == UP_ARROW)
   {
      game.moveBoard(1);
   }
   else if(keyCode == LEFT_ARROW)
   {
      game.moveBoard(2);
   }
   else if(keyCode == RIGHT_ARROW)
   {
      game.moveBoard(3);
   }

}
