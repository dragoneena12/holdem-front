import React from "react";

import { Card } from "../../models";
import classes from "./Hands.module.css";

export const Hands: React.FC<{ cards: Card[]; playerNum: number }> = (
  props
) => (
  <>
    <div className={classes.myHand}>
      <img
        src={`/svg/${props.cards[0].getCardString()}.svg`}
        alt={props.cards[0].getCardString()}
      />
      <img
        src={`/svg/${props.cards[1].getCardString()}.svg`}
        alt={props.cards[1].getCardString()}
      />
    </div>
    {[...Array(props.playerNum - 1)].map((_, i) => (
      <div
        className={classes.otherHand}
        key={i}
        style={{
          left: `${
            40 *
              Math.cos(
                (1 / 2) * Math.PI + ((2 * Math.PI) / props.playerNum) * (i + 1)
              ) +
            50
          }%`,
          top: `${
            40 *
              Math.sin(
                (1 / 2) * Math.PI + ((2 * Math.PI) / props.playerNum) * (i + 1)
              ) +
            50
          }%`,
        }}
      >
        <img src={`/svg/1B.svg`} alt="1B" />
        <img src={`/svg/1B.svg`} alt="1B" />
      </div>
    ))}
  </>
);
