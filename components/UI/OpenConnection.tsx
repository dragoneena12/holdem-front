import React from "react";
import clone from "clone";
import Button from "@material-ui/core/Button";

import { Table } from "../../models";
import { ItableAPI } from "../../types";

export const OpenConnection: React.FC<{
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  table: Table;
  setTable: React.Dispatch<React.SetStateAction<Table>>;
}> = (props) => {
  const connectionHandler = () => {
    const socket = new WebSocket(process.env.serverAddress!);
    socket.onopen = () => {
      console.log("接続完了");
      props.setSocket(socket);
    };
    socket.addEventListener("message", function (e: MessageEvent<string>) {
      props.setTable((prev) => {
        const nextTable = clone(prev);
        const data = JSON.parse(e.data) as ItableAPI;
        nextTable.setTableStatus(data);
        return nextTable;
      });
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
