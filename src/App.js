import React, { Component } from "react";
import Form from "./components/Form/Form";
import AllList from "./components/AllList/AllList";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";

import { H1, InnerWrapper, ExtWrapper } from "./styledComponent";

class App extends Component {
  state = {
    name: "",
    description: "",
    amount: "",
    type: "Income",
    eventDate: "",
    IncomeList: [],
    ExpensesList: [],
    List: [],
    balance: 0,
    display: false,
    isValid: false,
    amtErr: null,
    desErr: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate();
    this.state.isValid && this.createList();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.List.length !== prevState.List.length) {
      this.balance();
    }
  }

  validate = () => {
    this.validateDescription() &&
      this.validateAmount() &&
      this.validateAmount() &&
      this.setState({ ...this.state, isValid: true });
  };

  validateDescription = () => {
    const description = document.getElementById("description").value;
    const descRegX = /[A-Za-z0-9]/;
    if (description === "" || description === null) {
      this.setState({
        ...this.state,
        desErr: "Description cannot be empty"
      });
      return false;
    } else if (descRegX.test(description) === false) {
      this.setState({
        ...this.state,
        desErr: "Description cannot have special characters"
      });
      return false;
    }
    this.setState({
      ...this.state,
      desErr: null
    });
    return true;
  };
  validateAmount = () => {
    const amount = document.getElementById("amount").value;
    const amountRegX = /[0-9]/;
    if (amount === "" || amount === null) {
      this.setState({
        ...this.state,
        amtErr: "Amount cannot be empty"
      });
      return false;
    } else if (amountRegX.test(amount) === false) {
      this.setState({
        ...this.state,
        amtErr: "Amount can only have numeric values"
      });
      return false;
    }
    this.setState({
      ...this.state,
      amtErr: null
    });
    return true;
  };

  createList = () => {
    const it = {};
    it.amount = this.state.amount;
    it.description = this.state.description;
    it.type = this.state.type;
    it.eventDate = this.state.eventDate;
    this.setState({ List: [...this.state.List].concat(it) });
    this.state.type === "Income"
      ? this.setState({ IncomeList: [...this.state.IncomeList].concat(it) })
      : this.state.type === "Expenses" &&
        this.setState({
          ExpensesList: [...this.state.ExpensesList].concat(it)
        });
  };

  balance = () => {
    [...this.state.IncomeList].filter(item => {
      let sum = this.state.balance;
      return this.setState({ balance: (sum += Number(item.amount)) });
    });
    [...this.state.ExpensesList].filter(item => {
      let difference = this.state.balance;
      return this.setState({ balance: (difference -= Number(item.amount)) });
    });
  };

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  viewBalanceSheet = e => {
    e.preventDefault();
    this.setState({ display: this.state.display === false && true });
  };

  render() {
    return (
      <ExtWrapper>
        <H1>BalanceSheet Application</H1>
        <InnerWrapper>
          {this.state.display ? (
            <BalanceSheet
              data={this.state.List}
              incomeList={this.state.IncomeList}
              expensesList={this.state.ExpensesList}
              button={this.viewBalanceSheet}
              balance={this.state.balance}
              display={this.state.display}
            />
          ) : (
            <React.Fragment>
              <Form
                submit={this.handleSubmit}
                update={this.updateInput}
                button={this.viewBalanceSheet}
                display={this.state.display}
                validate={this.validate}
                desErr={this.state.desErr}
                amtErr={this.state.amtErr}
              />
              <AllList data={this.state.List} balance={this.state.balance} />
            </React.Fragment>
          )}
        </InnerWrapper>
      </ExtWrapper>
    );
  }
}

export default App;
