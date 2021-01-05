import { table } from "console";
import React from "react";

import { Table } from "../../models";
import classes from "./Hands.module.css";

export const Hands: React.FC<{
  table: Table;
  playerNum: number;
  mySeatNum: number;
}> = (props) => (
  <>
    {props.table.hand.length == 2 && (
      <>
        <p className={classes.handRank}>{props.table.handRank}</p>
        <div className={classes.myHand}>
          <img
            src={`/svg/${props.table.hand[0].getCardString()}.svg`}
            alt={props.table.hand[0].getCardString()}
          />
          <img
            src={`/svg/${props.table.hand[1].getCardString()}.svg`}
            alt={props.table.hand[1].getCardString()}
          />
        </div>
        {[...Array(props.playerNum - 1)].map(
          (_, i) =>
            props.table.seatingChart[i] &&
            i !== props.mySeatNum && (
              <div
                className={classes.otherHand}
                key={i}
                style={{
                  left: `${
                    40 *
                      Math.cos(
                        (1 / 2) * Math.PI +
                          ((2 * Math.PI) / props.playerNum) *
                            (i - props.mySeatNum)
                      ) +
                    50
                  }%`,
                  top: `${
                    40 *
                      Math.sin(
                        (1 / 2) * Math.PI +
                          ((2 * Math.PI) / props.playerNum) *
                            (i - props.mySeatNum)
                      ) +
                    50
                  }%`,
                }}
              >
                <img src={`/svg/1B.svg`} alt="1B" />
                <img src={`/svg/1B.svg`} alt="1B" />
              </div>
            )
        )}
      </>
    )}
  </>
);
