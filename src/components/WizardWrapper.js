import React from "react";

export default function WizardWrapper(props) {
  const { logoTop } = props;
  return (
    <div
      style={{
        maxWdth: "700px",
        margin: "0 auto",
        backgroundImage: "url('/assets/sfondo.png')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: logoTop,
          width: "100%",
          textAlign: "center"
        }}
      >
        <img src="/assets/logoAndPayoff.png" style={{ margin: "0 auto" }} />
      </div>
      <div>{React.cloneElement(props.children, { ...props })}</div>
    </div>
  );
}
