import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";

import { Table } from "../../models";
import classes from "./Profiles.module.css";

export const Profiles: React.FC<{
  table: Table;
  name: string;
  socket?: WebSocket;
  mySeatNum: number;
  setMySeatNum: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  const seatHandler = (i: number) => {
    const sendData = {
      action: "seat",
      name: props.name,
      amount: i,
    };
    props.socket?.send(JSON.stringify(sendData));
    props.setMySeatNum(() => i);
  };
  const leaveHandler = (i: number) => {
    const sendData = {
      action: "leave",
      name: props.name,
      amount: i,
    };
    props.socket?.send(JSON.stringify(sendData));
    props.setMySeatNum(() => 0);
  };
  return (
    <>
      {props.table.seatingChart.map((player, i) => (
        <div
          className={classes.otherChip}
          key={i}
          style={{
            left: `${
              40 *
                Math.cos(
                  (1 / 2) * Math.PI +
                    ((2 * Math.PI) / props.table.seatingChart.length) *
                      (i - props.mySeatNum)
                ) +
              50
            }%`,
            top: `${
              40 *
                Math.sin(
                  (1 / 2) * Math.PI +
                    ((2 * Math.PI) / props.table.seatingChart.length) *
                      (i - props.mySeatNum)
                ) +
              50
            }%`,
          }}
        >
          {player !== null ? (
            <>
              <Chip
                avatar={<Avatar>U</Avatar>}
                label={
                  <>
                    <p>{player.player.name}</p>
                    <p>${player.player.bankroll}</p>
                  </>
                }
                color={props.table.currentPlayer === i ? "primary" : "default"}
                onDelete={() => {
                  return;
                }}
                deleteIcon={
                  props.table.buttonPlayer === i ? <StarIcon /> : <div />
                }
              />
              {player.player.name === props.name &&
              props.table.state == "beforeGame" ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => leaveHandler(i)}
                >
                  離席する
                </Button>
              ) : null}
            </>
          ) : (
            <>
              {props.table.state == "beforeGame" ? (
                props.table.seatingChart.find(
                  (el) => el?.player.name === props.name
                ) ? (
                  <Button variant="contained" color="primary" disabled>
                    空席
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => seatHandler(i)}
                  >
                    着席する
                  </Button>
                )
              ) : null}
            </>
          )}
        </div>
      ))}
    </>
  );
};
