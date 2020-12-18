import { Itable, ItableAPI } from "../types";
import { Card } from "./card";

export class Table implements Itable {
  state: "" | "beforeGame" | "dealingHands" | "preflop" = "";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[] = [];
  buttonPlayer: number | null = null;
  currentPlayer: number | null = null;
  hand: Card[] = [];

  setTableStatus(data: ItableAPI): void {
    this.state = data.state;
    this.seatingChart = data.seating_chart
      ? data.seating_chart
      : this.seatingChart;
    this.buttonPlayer = data.button_player
      ? data.button_player
      : this.buttonPlayer;
    this.currentPlayer = data.current_player
      ? data.current_player
      : this.currentPlayer;
    if (data.hand && data.hand.length == 2) {
      const nHand = [];
      for (const i of [0, 1]) {
        nHand.push(new Card(data.hand[i].number, data.hand[i].suit));
      }
      this.hand = [...nHand];
    }
  }
}
