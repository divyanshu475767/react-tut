import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();

  return (
    <div className="time">
      <div className="month">{month}</div>
      <div className="day">{year}</div>
      <div className="year">{day}</div>
    </div>
  );
};

export default ExpenseDate;
