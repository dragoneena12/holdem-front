import { Itable, ItableAPI } from "../types";
import { Card } from "./card";

export class Table implements Itable {
  state:
    | ""
    | "beforeGame"
    | "dealingHands"
    | "preflop"
    | "flop"
    | "turn"
    | "river"
    | "showdown"
    | "gameEnd" = "";
  seatingChart: ({
    player: {
      id: string;
      name: string;
      bankroll: number;
    };
    hand: Card[];
    betting: number;
    ongoing: boolean;
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
  potSize = 0;
  BB = 2; // Todo: Magic Number

  setTableStatus(data: ItableAPI): void {
    this.state = data.state;
    const sc: ({
      player: {
        id: string;
        name: string;
        bankroll: number;
      };
      hand: Card[];
      betting: number;
      ongoing: boolean;
    } | null)[] = [];
    data.seating_chart.forEach((el) =>
      sc.push(
        el
          ? {
              player: el.player,
              hand: el.hand.map((c) => new Card(c.number, c.suit)),
              betting: el.betting,
              ongoing: el.ongoing,
            }
          : el
      )
    );
    this.seatingChart = sc;
    this.buttonPlayer = data.button_player;
    this.currentPlayer = data.current_player;
    this.potSize = data.pot_size;
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
