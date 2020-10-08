import React from "react";

import { Card } from "../../models";
import { GetCards } from "./GetCards";
import { OpenConnection } from "./OpenConnection";
import classes from "./Panel.module.css";

interface IPanel {
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  socket?: WebSocket;
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
}

export const Panel: React.FC<IPanel> = (props) => (
  <div className={classes.Panel}>
    {props.socket ? (
      <GetCards setCards={props.setCards} socket={props.socket} />
    ) : (
      <OpenConnection setSocket={props.setSocket} />
    )}
  </div>
);
