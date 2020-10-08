import React from "react";
import Button from "@material-ui/core/Button";

import { Card } from "../models";
import { ISockHand } from "../types";

interface IGetCards {
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  socket: WebSocket;
}

export const GetCards: React.FC<IGetCards> = (props) => {
  const cardDealHandler = () => {
    const message = {
      action: "reqCard",
    };
    props.socket.send(JSON.stringify(message));
    props.socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
      const hands: ISockHand = JSON.parse(event.data);
      const nCards = [];
      for (const i of [0, 1]) {
        nCards.push(new Card(+hands.hand[i].number, hands.hand[i].suit));
      }
      props.setCards(nCards);
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={cardDealHandler}>
        カードをリクエスト
      </Button>
    </div>
  );
};
