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
  handRank:
    | "royal_flush"
    | "straight_flush"
    | "four_of_a_kind"
    | "full_house"
    | "flush"
    | "straight"
    | "three_of_a_kind"
    | "two_pair"
    | "one_pair"
    | "high_card"
    | null = null;
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
    this.handRank = data.hand_rank !== undefined ? data.hand_rank : null;
    if (data.board !== undefined) {
      const nBoard: Card[] = [];
      data.board.forEach((card) =>
        nBoard.push(new Card(card.number, card.suit))
      );
      this.board = [...nBoard];
    }
  }
}
