import { Itable } from "../types";

export class Table implements Itable {
  state = "";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[] = [];

  setTableStatus(
    state: string,
    seatingChart: ({
      id: string;
      name: string;
      bankroll: number;
    } | null)[]
  ): void {
    this.state = state;
    this.seatingChart = seatingChart;
  }
}
