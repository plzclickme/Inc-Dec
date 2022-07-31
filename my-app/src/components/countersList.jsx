import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  let initialState = [
    { id: 1, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 2, value: 4, name: "Ложка", price: 100 },
    { id: 3, value: 9, name: "Вилка", price: 300 },
    { id: 4, value: 5, name: "Тарелка", price: 500 },
    { id: 5, value: 7, name: "Набор минималиста", price: 400 },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    // console.log("newCounters!", newCounters);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    // console.log("handleReset here!");
  };

  const handleIncrement = (id, value) => {
    let newArray = initialState.map((item, i) => {
      if (item.id === id) {
        return { ...item, value: value + 1 };
      } else {
        return { ...item };
      }
    });
    setCounters(newArray);
    // console.log(newArray, "NewItems");
  };

  const handleDecrement = (id, value) => {
    let newArray = initialState.map((item, i) => {
      if (item.id === id) {
        return { ...item, value: value - 1 };
      } else {
        return { ...item };
      }
    });
    setCounters(newArray);
  };

  if (counters.length > 0)
    return (
      <>
        {counters.map((count) => (
          <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onClickIncrement={handleIncrement}
            onClickDecrement={handleDecrement}
          />
        ))}
        <button className="btn-primary btn m-2" onClick={handleReset}>
          Сброс
        </button>
      </>
    );
  return <button className="btn btn-danger btn m-3">NO ITEMS!</button>;
};

export default CountersList;
