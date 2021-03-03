

export class Connect4 {

  constructor() {
    // Good luck
    this.board = [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ']
    ]

    this.a = 5; // column 0
    this.b = 5;
    this.c = 5;
    this.d = 5;
    this.e = 5;
    this.f = 5;
    this.g = 5; // column 6
    this.playerToken = 'X';

    this.stillPlayerTurn = 0;
    this.gameOver;

  }

  playerTurn(current) { 
    console.log(`Player ${current === 'X' ? 1 : 2} has a turn.`)
    current === 'X' ? this.playerToken = 'O' : this.playerToken = 'X';
  }

  winConditionCheck(current) {
    let vCount = 0; //counts player tokens in a row
    let hCount = 0;
    // let dCount = 0;
    
    // VERTICAL 4-------------------------------------
    for (let col = 0; col < 7; col++) {

      for (let row = 0; row < 6; row++) {
        
        if (this.board[row][col] === current) {
          vCount++;
        } else { //resets vCount when consecutive count is interrupted
          vCount = 0;
        }

        // WIN STATEMENT
        if (vCount === 4) {
          if (current === 'X') {
            console.log("Player 1 wins!");
          } else {
            console.log("Player 2 wins!");
          }
          break;
        }
      }
      if (vCount === 4) {
        this.gameOver = 'y';
        break;
      }

    }

    // HORIZONTAL 4-------------------------------------
    for (let row = 0; row < 6; row++) {
      
      for (let col = 0; col < 7; col++) {
        
        if (this.board[row][col] === current) {
          hCount++;
        } else { //resets hCount when consecutive count is interrupted
          hCount = 0;
        }

        // WIN STATEMENT
        if (hCount === 4) {
          if (current === 'X') {
            console.log("Player 1 wins!");
          } else {
            console.log("Player 2 wins!");
          }
          break;
        }
      }
      if (hCount === 4) {
        this.gameOver = 'y';
        break;
      }
    }

    // DIAGONAL 4  (incomplete)-------------------------------------
// Navigating the board for diagonals would be different from the previous horizontal/vertical 
// win conditions. Diagonals running in a backslash pattern would iterate through the current 
// point of interest by [+1][+1], until out of bounds. Example: from Board[2][0], next iteration
// would search Board[3][1], and so on. Diagonals running in a frontslash pattern would 
// change by Board[-1][+1] with each iteration, until out of bounds. The algorithm would then 
// account for the boundaries of the board. The following "increment" and "win statements" would 
// be the same
        
    //     if (this.board[row][col] === current) {
    //       dCount++;
    //     } else { //resets dCount when consecutive count is interrupted
    //       dCount = 0;
    //     }

    //     // WIN STATEMENT
    //     if (dCount === 4) {
    //       if (current === 'X') {
          //   console.log("Player 1 wins!");
          // } else {
          //   console.log("Player 2 wins!");
    //       }
          
  }

  fullColumnCheck(colPosition) {
    if (colPosition < 0) {
      console.log("Column full!");
      this.stillPlayerTurn = 1;
      return true;
    } else {
      return false;
    }
  }

  play(col: number) {
    // Good luck
    // rows 0-5, cols 0-6
    if (this.gameOver) {
      console.log("Game has finished!");

    } else {
      
        
      switch (col) {
        case 0:
          // ins
          if (this.fullColumnCheck(this.a)) {
            break;
          }
          this.board[this.a][0] = this.playerToken;
          this.a--;
          this.stillPlayerTurn = 0;
          break;
        case 1:
          if (this.fullColumnCheck(this.b)) {
            break;
          }
          this.board[this.b][1] = this.playerToken;
          this.b--;
          this.stillPlayerTurn = 0;
          break;
        case 2:
          if (this.fullColumnCheck(this.c)) {
            break;
          }
          this.board[this.c][2] = this.playerToken;
          this.c--;
          this.stillPlayerTurn = 0;
          break;
        case 3:
          if (this.fullColumnCheck(this.d)) {
            break;
          }
          this.board[this.d][3] = this.playerToken;
          this.d--;
          this.stillPlayerTurn = 0;
          break;
        case 4:
          if (this.fullColumnCheck(this.e)) {
            break;
          }
          this.board[this.e][4] = this.playerToken;
          this.e--;
          this.stillPlayerTurn = 0;
          break;
        case 5:
          if (this.fullColumnCheck(this.f)) {
            break;
          }
          this.board[this.f][5] = this.playerToken;
          this.f--;
          this.stillPlayerTurn = 0;
          break;
        case 6:
          if (this.fullColumnCheck(this.g)) {
            break;
          }
          this.board[this.g][6] = this.playerToken;
          this.g--;
          this.stillPlayerTurn = 0;
          break;
        default:
          console.log('Please enter valid column number.');
      }

      if (this.stillPlayerTurn) {

        return console.log(`Player ${this.playerToken === 'X' ? 1 : 2}, please select a different column.`);
      } else {
        // console.log(this.playerToken); // codecheck
        this.winConditionCheck(this.playerToken);
        this.playerTurn(this.playerToken);

      }
    }
  } // play METHOD END
} //  CLASS END

// console.log(game.board.join('\n') + '\n\n')      //shows game board 

// notes
// - columns numbered 0-6, left to right (7 columns, 6 rows)
//    -> each column is an array indexed 0-5, each array/col named 0-6
// - first to form line of 4 hor/vert/diag wins
// - prompt "Player n wins!" Any following moves returns "Game has finished!"
// - "Column full!", next move must be taken by the same player
// - any move should return "Player n has a turn"
// - Player 1 always starts the game and alternates with player 2
