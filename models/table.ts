import { Itable } from "../types";

export class Table implements Itable {
  state = "";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[] = [];
  buttonPlayer: number | null = null;
  currentPlayer: number | null = null;

  setTableStatus(
    state: string,
    seatingChart?: ({
      id: string;
      name: string;
      bankroll: number;
    } | null)[],
    buttonPlayer?: number,
    currentPlayer?: number
  ): void {
    this.state = state;
    this.seatingChart = seatingChart ? seatingChart : this.seatingChart;
    this.buttonPlayer = buttonPlayer ? buttonPlayer : this.buttonPlayer;
    this.currentPlayer = currentPlayer ? currentPlayer : this.currentPlayer;
  }
}
