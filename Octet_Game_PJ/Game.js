class Game
{
    constructor(haveIon, haveTime, el)
    {
      this.board = this.create2DArray(5,5);
      this.sizeW = width/5;
      this.sizeH = width/5;
      this.sizeH *= 0.99;
      this.sizeW *= 0.99;
      this.start = width/200;
      this.ion = haveIon;
      this.time = haveTime;
      this.score = createP("Score: 0");
      this.scorePoints = 0;
      this.time;
      this.elements = el;
      this.timer = 6;
      if(haveTime == true)
      {
        this.time = createP("Time: 6");
        console.log(this.time);
        setTimeout(this.DecreaseTimer, 10000);
      }
    }

    DecreaseTimer()
    {
      if(this.haveTime == false)
        return;


      console.log("asd");
      this.timer--;
      this.time.html("Time: " + this.timer);
      if(this.timer <= 0)
      {
         scene = 0;
      }
//      setTimeout(this.DecreaseTimer(), 1000);
    }

    Show()
    {
      for (let i = 0; i < 5; i++)
      {
        for (var j = 0; j < 5; j++)
        {
            let x = this.start + i * this.sizeH;
            let y = this.start + j * this.sizeW;

            noFill();
            strokeWeight(3);
            rect(x,y, this.sizeH, this.sizeW);

            if(this.board[i][j] != null && this.board[i][j] != undefined)
            {
                push();
                fill(0);
                textAlign(CENTER, CENTER);
                textSize(40);
                noStroke();
                x = x + this.sizeW / 2;
                y = y + this.sizeH / 2;
                text(this.board[i][j].symbol, x, y);
                textSize(16);
                text(this.board[i][j].eletronsLastLayer, x + this.sizeW/3, y - this.sizeH/3);
                if(this.board[i][j].ionValue != 0)
                {
                   fill(255,0,0);
                   text(this.board[i][j].ionValue, x - this.sizeW/3, y - this.sizeH/3);
                }
                pop();
            }
        }
      }

      this.UpdateScore();
    }

    RemoveThings()
    {
       this.score.remove();
       if(this.time != undefined || this.time != null)
        this.time.remove();
    }

    UpdateScore()
    {
      this.score.html("Score: " + this.scorePoints);
    }

    UpdateTimer()
    {
      this.time.html("Time: " + this.timer);
    }

    Slide(row, leftOrRight)
    {
        let newRow = new Array(5);
        let spot;

        if(leftOrRight == true)
        {
          spot = 0;
          for (let i = 0; i < 5; i++) {
            if(row[i] != null && spot >= 0 && spot < 5)
            {
               newRow[spot] = row[i];
               spot++;
            }
          }
        }
        else
        {
            spot = 4;
            for (let i = 0; i < 5; i++) {
              if(row[i] != null && spot >= 0 && spot < 5)
              {
                 newRow[spot] = row[i];
                 spot--;
              }
            }
        }

        return newRow;
    }

    create2DArray(columm, lines)
    {
       let arr = new Array(columm);

       for (var i = 0; i < columm; i++) {
         arr[i] = new Array(lines);
       }

       return arr;
    }



    createElement(table)
    {
        let options = [];
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
              if(table[i][j] == null || table[i][j] == undefined){
                  options.push(new Position(i,j));
              }
          }
        }

        let i = int(random(0, options.length));

        if(options[i] == undefined)
        {
          scene = 0;
          this.RemoveThings();
          return;
        }

        let x = options[i].x;
        let y = options[i].y;
        let el = this.elements[int(random(0, this.elements.length))];
        table[x][y] = el;
    }

    Combine(row, leftOrRight)
    {
        let rowCombine = new Array(5);

        if(leftOrRight == true)
        {
            for (var i = 0; i < row.length; i++) {
                if(i + 1 < row.length && row[i] != null && row[i] != undefined
                  && row[i + 1] != null && row[i + 1] != undefined && row[i].CombineTwo(row[i + 1]))
                {
                    row[i] = null;
                    row[i + 1] = null;
                    this.scorePoints++;
                    this.timer++;
                }
                else if(i + 1 < row.length && i + 2 < row.length && row[i] != null && row[i] != undefined && row[i + 1] != null &&
                  row[i + 1] != undefined && row[i + 2] != null && row[i + 2] != undefined && row[i].CombineThree(row[i + 1], row[i + 2]))
                {
                    row[i] = null;
                    row[i + 1] = null;
                    row[i + 2] = null;
                    this.scorePoints+= 2;
                    this.timer+= 2;
                }
                else
                {
                   rowCombine[i] = row[i];
                }
            }
        }
        else
        {
            for (var i = 4; i > 0; i--) {
                if(i - 1 >= 0 && row[i] != null && row[i] != undefined
                  && row[i - 1] != null && row[i - 1] != undefined && row[i].CombineTwo(row[i - 1]))
                {
                    row[i] = null;
                    row[i - 1] = null;
                    this.scorePoints++;
                    this.timer++;
                }
                else if(i - 1 >= 0 && i - 2 >= 0 && row[i] != null && row[i] != undefined && row[i - 1] != null &&
                  row[i - 1] != undefined && row[i - 2] != null && row[i - 2] != undefined && row[i].CombineThree(row[i - 1], row[i - 2]))
                {
                    row[i] = null;
                    row[i - 1] = null;
                    row[i - 2] = null;
                    this.scorePoints+= 2;
                    this.timer+= 2;
                }
                else
                {
                   rowCombine[i] = row[i];
                }
            }
        }
        return rowCombine;
    }

    moveBoard(moviment)
    {
        if(moviment == 0 || moviment == 1)
        {
            let newBoard = this.board;
            for (let i = 0; i < 5; i++)
            {
              let side = moviment == 1 ? true : false;
              let newRow = [];
              let row = [newBoard[i][0],newBoard[i][1],newBoard[i][2],newBoard[i][3],newBoard[i][4]];
              newRow = this.Slide(row, side);
              newRow = this.Combine(newRow, side);
              newRow = this.Slide(newRow, side);

              newBoard[i][0] = newRow[0];
              newBoard[i][1] = newRow[1];
              newBoard[i][2] = newRow[2];
              newBoard[i][3] = newRow[3];
              newBoard[i][4] = newRow[4];
            }
            this.createElement(this.board);
        }
        else if(moviment == 2 || moviment == 3)
        {
            let newBoard = this.board;
            for (let i = 0; i < 5; i++)
            {
              let side = moviment == 2 ? true : false;
              let newRow = [];
              let row = [newBoard[0][i],newBoard[1][i],newBoard[2][i],newBoard[3][i],newBoard[4][i]];
              newRow = this.Slide(row, side);
              newRow = this.Combine(newRow, side);
              newRow = this.Slide(newRow, side);

              newBoard[0][i] = newRow[0];
              newBoard[1][i] = newRow[1];
              newBoard[2][i] = newRow[2];
              newBoard[3][i] = newRow[3];
              newBoard[4][i] = newRow[4];
            }
            this.createElement(this.board);
        }
    }

    Copy(table)
    {
       copy = create2DArray(5,5);

       for (let i = 0; i < 5; i++)
       {
         for (var j = 0; j < 5; j++)
         {
            copy[i][j] = table[i][j];
         }
       }
       return copy;
    }

}

function Position(x, y){
  this.x = x;
  this.y = y;
}
