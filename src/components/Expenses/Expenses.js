import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const [expenses, setExpenses] = useState(props.expenses);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(props.expenses[0].date.getFullYear());

    const newExpenses = props.expenses.filter((expense)=>{
      console.log(expense.date.getFullYear() , filteredYear)
      return expense.date.getFullYear().toString() === filteredYear.toString() ;
    })
     console.log(newExpenses);
     setExpenses(newExpenses);

  };

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
};

export default Expenses;
