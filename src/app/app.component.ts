import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // The component variables represent the state of game
  // and any game input initiated by the user input will update
  // the state
  title = "Tic Tac Toe";
  blocks = ["", "", "", "", "", "", "", "", ""];
  player_x = "X";
  player_o = "O";
  current_player;
  the_winner = undefined;
  winning_blocks = ["", "", ""];
  tie = false;

  constructor() {
    this.current_player = this.player_x;
  }

  clicked(i) {
    if (this.blocks[i] === "" && this.the_winner === undefined) {
      this.blocks[i] = this.current_player;
      this.current_player =
        this.current_player === this.player_x ? this.player_o : this.player_x;

      this.winner();
    }
  }

  winningBlock(i) {
    return !!this.winning_blocks.find(el => {
      return el === JSON.stringify(i);
    });
  }

  winner() {
    // blocks array contains "X", "O" or " ". A tie occurs when blocks
    // no longer contains an empty slot (without a winner having
    // been declared). IOW, if blocks contains an " ", there cannot
    // be a tie yet.
    this.tie = this.blocks.find(el => el === "") === "" ? false : true;

    //top row across
    if (
      this.blocks[0] === this.blocks[1] &&
      this.blocks[1] === this.blocks[2] &&
      this.blocks[0] !== ""
    ) {
      this.the_winner = this.blocks[0];
      this.winning_blocks = ["0", "1", "2"];
    }
    //middle row across
    if (
      this.blocks[3] === this.blocks[4] &&
      this.blocks[4] === this.blocks[5] &&
      this.blocks[3] !== ""
    ) {
      this.the_winner = this.blocks[3];
      this.winning_blocks = ["3", "4", "5"];
    }
    if (
      this.blocks[6] === this.blocks[7] &&
      this.blocks[7] === this.blocks[8] &&
      this.blocks[6] !== ""
    ) {
      this.the_winner = this.blocks[6];
      this.winning_blocks = ["6", "7", "8"];
    }
    //left col down
    if (
      this.blocks[0] === this.blocks[3] &&
      this.blocks[3] === this.blocks[6] &&
      this.blocks[0] !== ""
    ) {
      this.the_winner = this.blocks[0];
      this.winning_blocks = ["0", "3", "6"];
    }
    //middle col down
    if (
      this.blocks[1] === this.blocks[4] &&
      this.blocks[4] === this.blocks[7] &&
      this.blocks[1] !== ""
    ) {
      this.the_winner = this.blocks[1];
      this.winning_blocks = ["1", "4", "7"];
    }
    //right col down
    if (
      this.blocks[2] === this.blocks[5] &&
      this.blocks[5] === this.blocks[8] &&
      this.blocks[2] !== ""
    ) {
      this.the_winner = this.blocks[2];
      this.winning_blocks = ["2", "5", "8"];
    }
    //diag ltr
    if (
      this.blocks[0] === this.blocks[4] &&
      this.blocks[4] === this.blocks[8] &&
      this.blocks[0] !== ""
    ) {
      this.the_winner = this.blocks[0];
      this.winning_blocks = ["0", "4", "8"];
    }
    //diag rtl
    if (
      this.blocks[2] === this.blocks[4] &&
      this.blocks[4] === this.blocks[6] &&
      this.blocks[2] !== ""
    ) {
      this.the_winner = this.blocks[2];
      this.winning_blocks = ["2", "4", "6"];
    } else return;
  }

  reset() {
    this.blocks = ["", "", "", "", "", "", "", "", ""];
    this.the_winner = undefined;
    this.winning_blocks = ["", "", ""];
    this.current_player = this.player_x;
    this.tie = false;
  }
}
