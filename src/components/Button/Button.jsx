import * as React from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { charactersContext } from "../../contexts";

export default function BasicButton({ text, handle }) {
  const { characters } = useContext(charactersContext);
  console.log(characters);
  return (
    <Button variant="contained" color="success" onClick={() => handle(null)}>
      {text}
    </Button>
  );
}
