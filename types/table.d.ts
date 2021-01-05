/* eslint-disable camelcase */
import { Card } from "../models/card";

export interface Itable {
  state: "" | "beforeGame" | "dealingHands" | "preflop" | "flop";
  seatingChart: ({
    id: string;
    name: string;
    bankroll: number;
  } | null)[];
  buttonPlayer: number | null;
  currentPlayer: number | null;
  hand: Card[];
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
    | null;
  board: Card[];
  betting: number[];
  potSize: number;
}

export interface ItableAPI {
  state: "" | "beforeGame" | "dealingHands" | "preflop" | "flop";
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
  hand_rank?:
    | "royal_flush"
    | "straight_flush"
    | "four_of_a_kind"
    | "full_house"
    | "flush"
    | "straight"
    | "three_of_a_kind"
    | "two_pair"
    | "one_pair"
    | "high_card";
  board?: {
    number: number;
    suit: "S" | "H" | "D" | "C" | "B";
  }[];
  betting?: number[];
  pot_size?: number;
}
