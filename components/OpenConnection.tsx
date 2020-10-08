import React from "react";
import Button from "@material-ui/core/Button";

export const OpenConnection: React.FC<{
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
}> = (props) => {
  const connectionHandler = () => {
    const socket = new WebSocket("ws://localhost:8765");
    socket.onopen = () => {
      console.log("接続完了");
      props.setSocket(socket);
    };
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={connectionHandler}>
        サーバーに接続
      </Button>
    </div>
  );
};
