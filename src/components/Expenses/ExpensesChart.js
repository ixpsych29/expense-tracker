import React from "react";
import Chart from "../Chart/Chart";

export const ExpensesChart = (props) => {
  const chartDataPoints = [
    { key: "Jan", value: 0 },
    { key: "Feb", value: 0 },
    { key: "Mar", value: 0 },
    { key: "Apr", value: 0 },
    { key: "May", value: 0 },
    { key: "Jun", value: 0 },
    { key: "Jul", value: 0 },
    { key: "Aug", value: 0 },
    { key: "Sep", value: 0 },
    { key: "Oct", value: 0 },
    { key: "Nov", value: 0 },
    { key: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
