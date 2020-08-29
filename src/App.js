import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

// mock data
const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 1200,
  },
  {
    id: uuidv4(),
    charge: "food",
    amount: 900,
  },
  {
    id: uuidv4(),
    charge: "transport",
    amount: 300,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending: RM
        {expenses.reduce((acc, cur) => {
          return (acc += cur.amount);
        }, 0)}
      </h1>
    </>
  );
}

export default App;
