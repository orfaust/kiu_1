import React from "react";

export default function MenuButton(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.caption}</div>
      <i className={props.icon} />
    </div>
  );
}
