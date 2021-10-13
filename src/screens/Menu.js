import React from "react";
import MenuButton from "../components/MenuButton";

export default function Menu() {
  return (
    <>
      <MenuButton title="Come arrivare" caption="via" icon="fa fa-trash" />
      <MenuButton title="miao" caption="mi si ?" icon="fa fa-trash" />
      <MenuButton title="bau" caption="ti no?" icon="fa fa-trash" />
      <MenuButton
        title="cicicoco"
        caption="el can?"
        icon="fas fa-umbrella-beach"
      />
    </>
  );
}
