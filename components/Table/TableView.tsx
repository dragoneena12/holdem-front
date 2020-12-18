import React, { useEffect } from "react";

import { Table } from "../../models";
import { Hands } from "./Hands";
import { Profiles } from "./Profiles";
import classes from "./TableView.module.css";

export const TableView: React.FC<{
  table: Table;
  playerNum: number;
  name: string;
  socket?: WebSocket;
}> = (props) => {
  useEffect(() => {
    console.log(props.table);
  }, [props.table]);
  return (
    <div className={classes.Table}>
      <Hands table={props.table} playerNum={props.playerNum} />
      <Profiles table={props.table} name={props.name} socket={props.socket} />
    </div>
  );
};
