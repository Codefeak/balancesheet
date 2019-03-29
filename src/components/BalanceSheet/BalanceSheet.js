import React from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import IncomeList from "./IncomeList/IncomeList";

import { BS, Button } from "../../styledComponent";

const BalanceSheet = props => {
  return (
    <BS>
      <div>
        <h1>Income</h1>
        <IncomeList data={props.incomeList} />
      </div>
      <div>
        <h1>Expenses</h1>
        <ExpensesList data={props.expensesList} />
      </div>
      <p>Balance</p>
      <p>{props.balance}</p>
      <Button width="100px">
        <i className="fas fa-print" />
      </Button>
      <Button width="100px">
        <i className="fas fa-arrow-circle-left" />
      </Button>
    </BS>
  );
};

export default BalanceSheet;
