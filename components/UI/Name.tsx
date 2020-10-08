import React from "react";
import TextField from "@material-ui/core/TextField";

interface IName {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const Name: React.FC<IName> = (props) => {
  return (
    <form>
      <TextField
        label="PlayerName"
        variant="outlined"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
    </form>
  );
};
