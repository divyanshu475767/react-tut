import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>

      {expenses.map((expense, index) => (
      <ExpenseItem
        
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ))}

    </div>
  );
}

export default App;
