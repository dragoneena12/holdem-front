import React from 'react';

interface ICard {
  name: string
}

export const Card: React.FC<ICard> = (props) => (
  <div>
    <img src={`/svg/${props.name}.svg`} alt={props.name} />
  </div>
);
