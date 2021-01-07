/* eslint-disable camelcase */
import { Card } from "../models/card";

export interface Itable {
  state:
    | ""
    | "beforeGame"
    | "dealingHands"
    | "preflop"
    | "flop"
    | "turn"
    | "river"
    | "showdown"
    | "gameEnd";
  seatingChart: ({
    player: {
      id: string;
      name: string;
      bankroll: number;
    };
    hand: Card[];
    betting: number;
    ongoing: boolean;
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
  potSize: number;
}

export interface ItableAPI {
  state:
    | ""
    | "beforeGame"
    | "dealingHands"
    | "preflop"
    | "flop"
    | "turn"
    | "river"
    | "showdown"
    | "gameEnd";
  seating_chart: ({
    player: {
      id: string;
      name: string;
      bankroll: number;
    };
    hand: {
      number: number;
      suit: "S" | "H" | "D" | "C" | "B";
    }[];
    betting: number;
    ongoing: boolean;
  } | null)[];
  button_player: number;
  current_player: number;
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
  board: {
    number: number;
    suit: "S" | "H" | "D" | "C" | "B";
  }[];
  pot_size: number;
}
