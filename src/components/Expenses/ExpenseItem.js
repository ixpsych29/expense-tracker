import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* toISOString return object of Date as a string
      <div> {props.date.toISOString()} </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
