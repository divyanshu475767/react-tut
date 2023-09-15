import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseDate = props.date;

  const expenseAmount = props.amount;
  const expenseLocation = props.location;

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(expenseAmount);


  const clickHandler = () => {
    console.log("clickeed");
    setTitle("lemon");
  };

  const changePriceHandler = () => {
    console.log("clickeed");
    setPrice('100');
  };

  const deleteHandler = (e) => {
    e.target.parentNode.remove();
  };

  console.log('reparse kr rha hu bro');

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <ExpenseDetails
        expenseTitle={title}
        expenseAmount={price}
        expenseLocation={expenseLocation}
      />
      <button onClick={clickHandler}>Change title</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={changePriceHandler}>Change Price</button>
    </div>
  );
};

export default ExpenseItem;
