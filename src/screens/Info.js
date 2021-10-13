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
  display: flex;
  & .text {
    color: #265a32;
  }
`;

export default function Info() {
  return (
    <div>
      <ScreenHeader text="Informazioni utili" />
    </div>
  );
}
