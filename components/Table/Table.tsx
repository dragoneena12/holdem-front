import React from "react";

import { Card } from "../../models";
import { Hands } from "./Hands";
import classes from "./Table.module.css";

export const Table: React.FC<{ cards: Card[]; playerNum: number }> = (
  props
) => (
  <div className={classes.Table}>
    <Hands cards={props.cards} playerNum={props.playerNum} />
  </div>
);
