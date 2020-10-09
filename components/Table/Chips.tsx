import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import classes from "./Chips.module.css";

export const Chips: React.FC<{ playerNum: number; name: string }> = (props) => (
  <>
    <div className={classes.myChip}>
      <Chip
        avatar={<Avatar>{props.name[0]?.toUpperCase()}</Avatar>}
        label={
          <>
            <p>{props.name}</p>
            <p>$10000</p>
          </>
        }
      />
    </div>
    {[...Array(props.playerNum - 1)].map((_, i) => (
      <div
        className={classes.otherChip}
        key={i}
        style={{
          left: `${
            40 *
              Math.cos(
                (1 / 2) * Math.PI + ((2 * Math.PI) / props.playerNum) * (i + 1)
              ) +
            50
          }%`,
          top: `${
            40 *
              Math.sin(
                (1 / 2) * Math.PI + ((2 * Math.PI) / props.playerNum) * (i + 1)
              ) +
            50
          }%`,
        }}
      >
        <Chip
          avatar={<Avatar>U</Avatar>}
          label={
            <>
              <p>UserName</p>
              <p>$100</p>
            </>
          }
        />
      </div>
    ))}
  </>
);
