import React from "react";
import styled from "styled-components";

function ScreenHeader({ children }) {
  return (
    <div className="screen-header">
      <h1>{children}</h1>
    </div>
  );
}

export default function Info() {
  return (
    <div>
      <ScreenHeader>Informazioni utili</ScreenHeader>
    </div>
  );
}
