import React from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.expenseTitle}</h2>
      <h2>{props.expenseLocation}</h2>
      <div className="expense-item__price">${props.expenseAmount}</div>
    </div>
  );
};

export default ExpenseDetails;
