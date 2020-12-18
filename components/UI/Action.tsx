import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface IAction {
  socket: WebSocket;
  name: string;
  action: actionType;
}

type actionType =
  | "reqCard"
  | "check"
  | "call"
  | "bet"
  | "raise"
  | "fold"
  | "allIn"
  | "showDown"
  | "muck"
  | "seat"
  | "start";

const actionName = {
  reqCard: "カードをリクエスト",
  check: "チェック",
  call: "コール",
  bet: "ベット",
  raise: "レイズ",
  fold: "フォールド",
  allIn: "オールイン",
  showDown: "ショーダウン",
  muck: "マック",
  seat: "すわる",
  start: "スタート",
};

export const Action: React.FC<IAction> = (props) => {
  const [amount, setAmount] = useState(0);

  const actionHandler = () => {
    const sendData = {
      action: props.action,
      name: props.name,
      amount: amount,
    };
    props.socket.send(JSON.stringify(sendData));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={actionHandler}>
        {actionName[props.action]}
      </Button>
      {props.action === "bet" ||
      props.action === "raise" ||
      props.action === "seat" ? (
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
      ) : null}
    </div>
  );
};
