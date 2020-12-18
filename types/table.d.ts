/* eslint-disable camelcase */
import { Card } from "../models/card";

export interface Itable {
  state: "" | "beforeGame" | "dealingHands" | "preflop";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[];
  buttonPlayer: number | null;
  currentPlayer: number | null;
  hand: Card[];
}

export interface ItableAPI {
  state: "" | "beforeGame" | "dealingHands" | "preflop";
  seating_chart?: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[];
  button_player?: number;
  current_player?: number;
  hand?: {
    number: number;
    suit: "S" | "H" | "D" | "C" | "B";
  }[];
}
