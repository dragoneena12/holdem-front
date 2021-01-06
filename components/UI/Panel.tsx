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
}

export const Panel: React.FC<IPanel> = (props) => {
  const currentMaxBet = props.table.betting.reduce(
    (a, b) => (a > b ? a : b),
    0
  );
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
                  action="check"
                />
              )}
              {currentMaxBet !== 0 && (
                <Action socket={props.socket} name={props.name} action="call" />
              )}
              {currentMaxBet === 0 && (
                <Action socket={props.socket} name={props.name} action="bet" />
              )}
              {currentMaxBet !== 0 && (
                <Action
                  socket={props.socket}
                  name={props.name}
                  action="raise"
                />
              )}
              <Action socket={props.socket} name={props.name} action="fold" />
            </>
          )}
          {/* <Action socket={props.socket} name={props.name} action="allIn" /> */}
          {props.table.state === "showdown" && (
            <>
              <Action
                socket={props.socket}
                name={props.name}
                action="showdown"
              />
              <Action socket={props.socket} name={props.name} action="muck" />
            </>
          )}
          {props.table.state === "beforeGame" && (
            <Action socket={props.socket} name={props.name} action="start" />
          )}
          <Action socket={props.socket} name={props.name} action="reset" />
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
