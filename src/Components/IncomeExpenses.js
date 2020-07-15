import React, { useContext } from "react";
// import { Transactions } from "./Transactions;
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amouts = transactions.map((transaction) => transaction.amount);
  const income = amouts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amouts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{expense}</p>
      </div>
    </div>
  );
};
