import React from "react";
import { Link } from "react-router-dom";
import WizardWrapper from "../components/WizardWrapper";

export default function GuideSelector() {
  return (
    <WizardWrapper logoTop="20%">
      <>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <Link to="/guide">start</Link>
        </div>
      </>
    </WizardWrapper>
  );
}
