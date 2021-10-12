import React from "react";
import { Link } from "react-router-dom";

import WizardWrapper from "../components/WizardWrapper";

export default function Splash() {
  return (
    <WizardWrapper logoTop="40%">
      <>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            width: "100%",
            textAlign: "center"
          }}
        >
          <Link to="/language">language</Link>
        </div>
      </>
    </WizardWrapper>
  );
}
