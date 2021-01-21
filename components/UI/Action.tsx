import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import { Table } from "../../models";
import classes from "./Action.module.css";

interface IAction {
  socket: WebSocket;
  name: string;
  action: actionType;
  table: Table;
  mySeatNum: number;
}

type actionType =
  | "reqCard"
  | "check"
  | "call"
  | "bet"
  | "raise"
  | "fold"
  | "allIn"
  | "showdown"
  | "muck"
  | "seat"
  | "start"
  | "reset";

const actionName = {
  reqCard: "カードをリクエスト",
  check: "チェック",
  call: "コール",
  bet: "ベット",
  raise: "レイズ",
  fold: "フォールド",
  allIn: "オールイン",
  showdown: "ショーダウン",
  muck: "マック",
  seat: "すわる",
  start: "スタート",
  reset: "リセット",
};

export const Action: React.FC<IAction> = (props) => {
  const [amount, setAmount] = useState(0);

  const marks = [
    {
      value: props.table.BB,
      label: "Min",
    },
    {
      value: (props.table.seatingChart[props.mySeatNum]?.player.bankroll
        ? props.table.seatingChart[props.mySeatNum]?.player.bankroll
        : 100) as number,
      label: "All in",
    },
  ];

  const actionHandler = () => {
    const sendData = {
      action: props.action,
      name: props.name,
      amount: amount,
    };
    if (typeof amount !== "number") {
      return;
    }
    props.socket.send(JSON.stringify(sendData));
  };

  return (
    <div className={classes.ActionContainer}>
      <Button variant="contained" color="primary" onClick={actionHandler}>
        {actionName[props.action]}
      </Button>
      {props.action === "bet" || props.action === "raise" ? (
        <div className={classes.Slider}>
          <Slider
            value={amount}
            onChange={(e, v) => setAmount(v as number)}
            defaultValue={0}
            getAriaValueText={(v) => `$${v}`}
            step={1}
            marks={marks}
            min={props.table.BB}
            max={props.table.seatingChart[props.mySeatNum]?.player.bankroll}
            valueLabelDisplay="on"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAmount(3 * props.table.BB)}
          >
            3BB
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setAmount(
                Math.round(
                  (1 / 2) *
                    (props.table.potSize +
                      props.table.seatingChart
                        .map((el) => (el?.betting ? el.betting : 0))
                        .reduce((a, b) => a + b, 0))
                )
              )
            }
          >
            1/2 Pot
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setAmount(
                Math.round(
                  props.table.potSize +
                    props.table.seatingChart
                      .map((el) => (el?.betting ? el.betting : 0))
                      .reduce((a, b) => a + b, 0)
                )
              )
            }
          >
            Pot
          </Button>
        </div>
      ) : null}
    </div>
  );
};
