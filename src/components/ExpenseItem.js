import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const expenseLocation = props.location;

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <ExpenseDetails
        expenseTitle={expenseTitle}
        expenseAmount={expenseAmount}
        expenseLocation={expenseLocation}
      />
    </div>
  );
}

export default ExpenseItem;
