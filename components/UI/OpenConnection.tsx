import React from "react";
import Button from "@material-ui/core/Button";

import { Table } from "../../models";
import { ItableAPI } from "../../types";

export const OpenConnection: React.FC<{
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  setTable: React.Dispatch<React.SetStateAction<Table>>;
  targetIP: string;
}> = (props) => {
  const connectionHandler = () => {
    const socket = new WebSocket(`ws://${props.targetIP}:8765`);
    socket.onopen = () => {
      console.log("接続完了");
      props.setSocket(socket);
    };
    socket.addEventListener("message", function (e: MessageEvent<string>) {
      const nextTable = new Table();
      const data = JSON.parse(e.data) as ItableAPI;
      nextTable.setTableStatus(data.state, data.seating_chart);
      props.setTable(nextTable);
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={connectionHandler}>
        サーバーに接続
      </Button>
    </div>
  );
};
