/* eslint-disable camelcase */
export interface Itable {
  state: string;
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[];
}

export interface ItableAPI {
  state: string;
  seating_chart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[];
}
