import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const titleChangeHandler=(e)=>{

    console.log(e.target.value);

  }








  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="10" onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;