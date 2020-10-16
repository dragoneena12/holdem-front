import React from "react";

import { Table } from "../../models";
import { Profiles } from "./Profiles";
import classes from "./TableView.module.css";

export const TableView: React.FC<{
  table: Table;
  playerNum: number;
  name: string;
  socket?: WebSocket;
}> = (props) => (
  <div className={classes.Table}>
    <Profiles table={props.table} name={props.name} socket={props.socket} />
  </div>
);
