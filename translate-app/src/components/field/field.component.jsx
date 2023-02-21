import React from "react";
import FlowerComponent from "../svg/flower.component";

function FieldComponent({ value, onChange }) {
  return (
    <div className="field">
      <FlowerComponent className="flower-right" fill="rgb(110, 146, 119)" />
      <FlowerComponent className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FieldComponent;
