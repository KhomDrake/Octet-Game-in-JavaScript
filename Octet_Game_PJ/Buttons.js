class Button
{
   constructor(_x, _y, wi, hei, _text, co, coText)
   {
        this.x = _x;
        this.y = _y;
        this.w = wi;
        this.h = hei;
        this.txt = _text;
        this.c = co;
        this.cTxt = coText;
   }

   show()
   {
      push();
      fill(this.c);
      rect(this.x, this.y, this.w, this.h);
      textSize(this.h/2);
      fill(this.cTxt);
      textAlign(CENTER, CENTER);
      text(this.txt, this.x + this.w/2, this.y + this.h/2);
      pop();
   }

   isPressed()
   {
      if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h)
      {
        return true;
      }
        return false;
   }
}
