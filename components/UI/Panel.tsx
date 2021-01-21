import React from "react";

import { Table } from "../../models";
import { Action } from "./Action";
import { Name } from "./Name";
import { OpenConnection } from "./OpenConnection";
import classes from "./Panel.module.css";

interface IPanel {
  socket?: WebSocket;
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  table: Table;
  setTable: React.Dispatch<React.SetStateAction<Table>>;
  mySeatNum: number;
}

export const Panel: React.FC<IPanel> = (props) => {
  let currentMaxBet = 0;
  props.table.seatingChart.forEach((p) => {
    if (p) currentMaxBet += p.betting;
  });
  return (
    <div className={classes.Panel}>
      {!props.socket && <Name name={props.name} setName={props.setName} />}
      {props.socket ? (
        <>
          {props.table.state !== "showdown" && (
            <>
              {currentMaxBet === 0 && (
                <Action
                  socket={props.socket}
                  name={props.name}
                  table={props.table}
                  mySeatNum={props.mySeatNum}
                  action="check"
                />
              )}
              {currentMaxBet !== 0 && (
                <Action
                  socket={props.socket}
                  name={props.name}
                  table={props.table}
                  mySeatNum={props.mySeatNum}
                  action="call"
                />
              )}
              <Action
                socket={props.socket}
                name={props.name}
                table={props.table}
                mySeatNum={props.mySeatNum}
                action="fold"
              />
              {currentMaxBet === 0 && (
                <Action
                  socket={props.socket}
                  name={props.name}
                  table={props.table}
                  mySeatNum={props.mySeatNum}
                  action="bet"
                />
              )}
              {currentMaxBet !== 0 && (
                <Action
                  socket={props.socket}
                  name={props.name}
                  table={props.table}
                  mySeatNum={props.mySeatNum}
                  action="raise"
                />
              )}
            </>
          )}
          {/* <Action socket={props.socket} name={props.name} action="allIn" /> */}
          {props.table.state === "showdown" && (
            <>
              <Action
                socket={props.socket}
                name={props.name}
                table={props.table}
                mySeatNum={props.mySeatNum}
                action="showdown"
              />
              <Action
                socket={props.socket}
                name={props.name}
                table={props.table}
                mySeatNum={props.mySeatNum}
                action="muck"
              />
            </>
          )}
          {props.table.state === "beforeGame" && (
            <Action
              socket={props.socket}
              name={props.name}
              table={props.table}
              mySeatNum={props.mySeatNum}
              action="start"
            />
          )}
          {/* <Action
            socket={props.socket}
            name={props.name}
            table={props.table}
            mySeatNum={props.mySeatNum}
            action="reset"
          /> */}
        </>
      ) : (
        <>
          <OpenConnection
            setSocket={props.setSocket}
            table={props.table}
            setTable={props.setTable}
          />
        </>
      )}
    </div>
  );
};
