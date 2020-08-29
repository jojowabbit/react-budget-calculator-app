import React from "react";
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
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
