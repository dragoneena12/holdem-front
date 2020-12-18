import React from "react";

import { Table } from "../../models";
import classes from "./Betting.module.css";

export const Betting: React.FC<{
  table: Table;
  playerNum: number;
  mySeatNum: number;
}> = (props) => (
  <>
    {props.table.state !== "beforeGame" &&
      [...Array(props.playerNum - 1)].map(
        (_, i) =>
          props.table.seatingChart[i] && (
            <p
              className={classes.betting}
              key={i}
              style={{
                left: `${
                  45 *
                    Math.cos(
                      (1 / 2) * Math.PI +
                        ((2 * Math.PI) / props.playerNum) *
                          (i - props.mySeatNum)
                    ) +
                  50
                }%`,
                top: `${
                  45 *
                    Math.sin(
                      (1 / 2) * Math.PI +
                        ((2 * Math.PI) / props.playerNum) *
                          (i - props.mySeatNum)
                    ) +
                  50
                }%`,
              }}
            >
              {`\$${props.table.betting[i]}`}
            </p>
          )
      )}
  </>
);
