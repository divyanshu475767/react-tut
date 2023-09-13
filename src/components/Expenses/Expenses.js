import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';


const Expenses = (props) => {
  return (
    <div className='expenses'>
      
      {props.expenses.map((expense, index) => (
      <ExpenseItem
        
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ))}
    </div>
  )
}

export default Expenses
