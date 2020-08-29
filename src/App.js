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
  // ******************** state values *************************
  // add expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");

  // ******************** functionality ************************
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
    } else {
      // handle alert call
    }
  };

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending: RM
        <span className="total">
          {expenses.reduce((acc, cur) => {
            return (acc += parseInt(cur.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
