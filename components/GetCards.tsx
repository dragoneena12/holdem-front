import React from "react";
import Button from "@material-ui/core/Button";

import { Card } from "../models";

interface IGetCards {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export const GetCards: React.FC<IGetCards> = (props) => {
  const cardDealHandler = () => {
    const socket = new WebSocket("ws://localhost:8765");
    const message = {
      message: "reqCard",
    };
    socket.onopen = () => {
      socket.send(JSON.stringify(message));
    };
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={cardDealHandler}>
        カードが配られるのを待つ
      </Button>
    </div>
  );
};
