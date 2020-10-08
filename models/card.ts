import {Icard} from '../types';

export class Card implements Icard {
  number: number;
  suit: 'S' | 'H' | 'D' | 'C';

  constructor(number: number, suit: 'S' | 'H' | 'D' | 'C') {
    /* コンストラクタ */
    this.number = number;
    this.suit = suit;
  }

  getNumberString(): string | undefined {
    if (this.number == 1) {
      return 'A';
    } else if (this.number < 10) {
      return String(this.number);
    } else if (this.number == 10) {
      return 'T';
    } else if (this.number == 11) {
      return 'J';
    } else if (this.number == 12) {
      return 'Q';
    } else if (this.number == 13) {
      return 'K';
    } else {
      throw Error('invalid card number.');
    }
  }

  getCardString(): string {
    return this.getNumberString() + this.suit;
  }
}
