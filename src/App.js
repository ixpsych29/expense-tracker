import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//app function here
const App = () => {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]);    //this is not clean way to use older data
    //...
    //perfect way for useState in case of older data
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //alternative to upper JSX (JavaScript XML) code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get Started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
