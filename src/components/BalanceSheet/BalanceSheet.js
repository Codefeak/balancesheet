import React from "react";
import ReactToPrint from "react-to-print";

import ExpensesList from "./ExpensesList/ExpensesList";
import IncomeList from "./IncomeList/IncomeList";

import { BS, Button, BSWrapper } from "../../styledComponent";

class BSPage extends React.Component {
  render() {
    return (
      <BSWrapper>
        <div>
          <h1>Income</h1>
          <IncomeList data={this.props.incomeList} />
        </div>
        <div>
          <h1>Expenses</h1>
          <ExpensesList data={this.props.expensesList} />
        </div>
        <p>Balance</p>
        <p>
          <b>{this.props.balance}</b>
        </p>
      </BSWrapper>
    );
  }
}

class BalanceSheet extends React.Component {
  render() {
    return (
      <BS>
        <BSPage {...this.props} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => (
            <Button width="100px">
              <i className="fas fa-print fa-lg" />
            </Button>
          )}
          content={() => this.componentRef}
        />
        <Button width="100px" onClick={this.props.button}>
          <i className="fas fa-arrow-circle-left fa-lg" />
        </Button>
      </BS>
    );
  }
}

export default BalanceSheet;
