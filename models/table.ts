import { Itable, ItableAPI } from "../types";
import { Card } from "./card";

export class Table implements Itable {
  state: "" | "beforeGame" | "dealingHands" | "preflop" | "flop" = "";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[] = [];
  buttonPlayer: number | null = null;
  currentPlayer: number | null = null;
  hand: Card[] = [];
  board: Card[] = [];
  betting: number[] = [];
  potSize = 0;

  setTableStatus(data: ItableAPI): void {
    this.state = data.state;
    this.seatingChart =
      data.seating_chart !== undefined ? data.seating_chart : this.seatingChart;
    this.buttonPlayer =
      data.button_player !== undefined ? data.button_player : this.buttonPlayer;
    this.currentPlayer =
      data.current_player !== undefined
        ? data.current_player
        : this.currentPlayer;
    this.betting = data.betting !== undefined ? data.betting : this.betting;
    this.potSize = data.pot_size !== undefined ? data.pot_size : this.potSize;
    if (data.hand !== undefined) {
      const nHand: Card[] = [];
      data.hand.forEach((card) => nHand.push(new Card(card.number, card.suit)));
      this.hand = [...nHand];
    }
    if (data.board !== undefined) {
      const nBoard: Card[] = [];
      data.board.forEach((card) =>
        nBoard.push(new Card(card.number, card.suit))
      );
      this.board = [...nBoard];
    }
  }
}
