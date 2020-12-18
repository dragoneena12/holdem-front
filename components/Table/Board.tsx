import React from "react";

import { Table } from "../../models";
import classes from "./Board.module.css";

export const Board: React.FC<{
  table: Table;
}> = (props) => (
  <>
    {props.table.board && (
      <div className={classes.Board}>
        <div className={classes.Cards}>
          {props.table.board.map((card) => (
            <img
              src={`/svg/${card.getCardString()}.svg`}
              alt={card.getCardString()}
              key={card.getCardString()}
            />
          ))}
        </div>
        <p>{`POT: \$${props.table.potSize}`}</p>
      </div>
    )}
  </>
);
