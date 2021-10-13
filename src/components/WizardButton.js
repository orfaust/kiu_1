import React from "react";
import { Link } from "react-router-dom";

export default function ActionButton(props) {
  const { to, text } = props;

  return (
    <div className="WizardButton">
      <Link to={to}>{text}</Link>
    </div>
  );
}
