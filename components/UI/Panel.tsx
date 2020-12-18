import React from "react";

import { Table } from "../../models";
import { Action } from "./Action";
import { Name } from "./Name";
import { TargetIP } from "./TargetIP";
import { OpenConnection } from "./OpenConnection";
import classes from "./Panel.module.css";

interface IPanel {
  socket?: WebSocket;
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  targetIP: string;
  setTargetIP: React.Dispatch<React.SetStateAction<string>>;
  table: Table;
  setTable: React.Dispatch<React.SetStateAction<Table>>;
}

export const Panel: React.FC<IPanel> = (props) => (
  <div className={classes.Panel}>
    <Name name={props.name} setName={props.setName} />
    {props.socket ? (
      <>
        <Action socket={props.socket} name={props.name} action="check" />
        <Action socket={props.socket} name={props.name} action="call" />
        <Action socket={props.socket} name={props.name} action="bet" />
        <Action socket={props.socket} name={props.name} action="raise" />
        <Action socket={props.socket} name={props.name} action="fold" />
        <Action socket={props.socket} name={props.name} action="allIn" />
        <Action socket={props.socket} name={props.name} action="showDown" />
        <Action socket={props.socket} name={props.name} action="muck" />
        <Action socket={props.socket} name={props.name} action="start" />
        <Action socket={props.socket} name={props.name} action="reset" />
      </>
    ) : (
      <>
        <TargetIP targetIP={props.targetIP} setTargetIP={props.setTargetIP} />
        <OpenConnection
          setSocket={props.setSocket}
          table={props.table}
          setTable={props.setTable}
          targetIP={props.targetIP}
        />
      </>
    )}
  </div>
);
