import React from "react";

import { Card, Table } from "../../models";
import { Action } from "./Action";
import { Name } from "./Name";
import { OpenConnection } from "./OpenConnection";
import classes from "./Panel.module.css";

interface IPanel {
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  socket?: WebSocket;
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setTable: React.Dispatch<React.SetStateAction<Table>>;
}

export const Panel: React.FC<IPanel> = (props) => (
  <div className={classes.Panel}>
    <Name name={props.name} setName={props.setName} />
    {props.socket ? (
      <>
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="reqCard"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="check"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="call"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="bet"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="raise"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="fold"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="allIn"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="showDown"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="muck"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="seat"
        />
        <Action
          setCards={props.setCards}
          socket={props.socket}
          name={props.name}
          action="start"
        />
      </>
    ) : (
      <OpenConnection setSocket={props.setSocket} setTable={props.setTable} />
    )}
  </div>
);
