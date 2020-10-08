import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Card } from "../models";

interface IForm {
  myCard: Card;
  setMyCard: React.Dispatch<React.SetStateAction<Card>>;
}

export const Form: React.FC<IForm> = (props) => {
  return (
    <form>
      <TextField
        label="すうじ"
        variant="outlined"
        value={props.myCard.number}
        onChange={(e) =>
          props.setMyCard(new Card(+e.target.value, props.myCard.suit))
        }
      />
      <FormControl>
        <InputLabel>すーと</InputLabel>
        <Select
          value={props.myCard.suit}
          onChange={(e) =>
            props.setMyCard(
              new Card(
                props.myCard.number,
                e.target.value as "S" | "H" | "D" | "C"
              )
            )
          }
        >
          <MenuItem value="S">スペード</MenuItem>
          <MenuItem value="H">ハート</MenuItem>
          <MenuItem value="D">ダイヤ</MenuItem>
          <MenuItem value="C">クラブ</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};
