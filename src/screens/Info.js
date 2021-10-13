import React from "react";
import styled from "styled-components";

const ScreenHeader = styled(({ text, className }) => {
  return (
    <div className={className}>
      <span className="back">
        <i className="fas fa-chevron-left" />
      </span>
      <span className="text">{text}</span>
    </div>
  );
})`
  font-family: "Baloo 2";
  font-weight: 700;
  position: relative;
  padding: 2em;
  font-size: 2em;

  & .text {
    color: #265a32;
  }
  & .back {
    position: absolute;
    left: 0;
  }
`;

export default function Info() {
  return (
    <div>
      <ScreenHeader text="Informazioni utili" />
    </div>
  );
}
