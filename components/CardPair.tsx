import React from "react";

import { Card } from "../models";

export const CardPair: React.FC<{ cards: Card[] }> = (props) => (
  <div>
    <img
      src={`/svg/${props.cards[0].getCardString()}.svg`}
      alt={props.cards[0].getCardString()}
    />
    <img
      src={`/svg/${props.cards[1].getCardString()}.svg`}
      alt={props.cards[1].getCardString()}
    />
  </div>
);
