import Expenses from "./components/Expenses/Expenses.js";
import React,{useState} from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";

let expenses = [
  {
    id: "e1",
    title: "School fee",
    amount: 250,
    date: new Date(2021, 5, 12),
    location:'New delhi',
  },
  {
    id: "e2",
    title: "Books",
    amount: 100,
    date: new Date(2021, 4, 13),
    location:'London',
  },
  {
    id: "e3",
    title: "House rent",
    amount: 2123,
    date: new Date(2022, 5, 19),
    location:'paris',

  },
  {
    id: "e4",
    title: " fee",
    amount: 25000,
    date: new Date(2025, 9, 2),
    location:'malaysia',
  },
];



const App=()=> {

  

  const [expenseArray , setExpenseArray] = useState(expenses);
  console.log(expenseArray);


  const addExpenseHandler = expense =>{
    console.log('in app js');
    setExpenseArray((prevExpenses)=>{

      return [expense,...prevExpenses];
    } )
    
  }

  return (
    <div >
    <NewExpense onAddExpense= {addExpenseHandler}/>
    <Expenses expenses={expenseArray} />
    </div>
  );
}

export default App;
