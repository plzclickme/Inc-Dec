import React, { useState } from "react";

const Counter = (props) => {
  const { value } = props;
  const formatValue = () => {
    return value === 0 ? <h4>empty</h4> : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  // const handleIncrement = () => {
  //   // setValue((prevState) => prevState + 1);
  //   console.log("increment!", value);
  // };
  // const handleDecrement = () => {
  //   // setValue((prevState) => prevState - 1);
  //   console.log("Decrement!", value);
  // };

  return (
    <div>
      <span>
        <b>{props.name}</b>
      </span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onClickIncrement(props.id, props.value)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onClickDecrement(props.id, props.value)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
