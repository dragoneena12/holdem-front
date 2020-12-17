import React from "react";
import TextField from "@material-ui/core/TextField";

interface ITargetIP {
  targetIP: string;
  setTargetIP: React.Dispatch<React.SetStateAction<string>>;
}

export const TargetIP: React.FC<ITargetIP> = (props) => {
  return (
    <form>
      <TextField
        label="TargetIP"
        variant="outlined"
        value={props.targetIP}
        onChange={(e) => props.setTargetIP(e.target.value)}
      />
    </form>
  );
};
