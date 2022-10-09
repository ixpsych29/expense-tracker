import React from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
