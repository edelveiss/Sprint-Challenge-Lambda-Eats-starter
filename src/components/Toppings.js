import React, { useState } from "react";
function Toppings(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.checkId}
        name={props.name}
        onChange={props.checkHandleChanges}
      ></input>
      <label htmlFor={props.checkLabel} style={{ marginLeft: "1rem" }}>
        {props.labelText}
      </label>
    </div>
  );
}
export default Toppings;
//checked={props.checked}
