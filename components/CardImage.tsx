import React from "react";

import { Card } from "../models";

export const CardImage: React.FC<{ card?: Card }> = (props) => (
  <div>
    <img
      src={`/svg/${props.card?.getCardString()}.svg`}
      alt={props.card?.getCardString()}
    />
  </div>
);
