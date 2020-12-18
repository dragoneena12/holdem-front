import React, { useEffect } from "react";

import { Table } from "../../models";
import { Hands } from "./Hands";
import { Profiles } from "./Profiles";
import { Betting } from "./Betting";
import { Board } from "./Board";
import classes from "./TableView.module.css";

export const TableView: React.FC<{
  table: Table;
  playerNum: number;
  name: string;
  socket?: WebSocket;
  mySeatNum: number;
  setMySeatNum: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  useEffect(() => {
    console.log(props.table);
  }, [props.table]);
  return (
    <div className={classes.Table}>
      <Hands
        table={props.table}
        playerNum={props.playerNum}
        mySeatNum={props.mySeatNum}
      />
      <Betting
        table={props.table}
        playerNum={props.playerNum}
        mySeatNum={props.mySeatNum}
      />
      <Board table={props.table} />
      <Profiles
        table={props.table}
        name={props.name}
        socket={props.socket}
        mySeatNum={props.mySeatNum}
        setMySeatNum={props.setMySeatNum}
      />
    </div>
  );
};
