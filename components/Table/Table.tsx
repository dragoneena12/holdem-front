import React from "react";

import { Card } from "../../models";
import { Chips } from "./Chips";
import { Hands } from "./Hands";
import classes from "./Table.module.css";

export const Table: React.FC<{
  cards: Card[];
  playerNum: number;
  name: string;
}> = (props) => (
  <div className={classes.Table}>
    <Hands cards={props.cards} playerNum={props.playerNum} />
    <Chips name={props.name} playerNum={props.playerNum} />
  </div>
);
