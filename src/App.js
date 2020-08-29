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
  // alert
  const [alert, setAlert] = useState({ show: false });

  // ******************** functionality ************************
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
      // handle alert call
      handleAlert({
        type: "danger",
        text: "charge cannot be blank and amount must be bigger than 0",
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
