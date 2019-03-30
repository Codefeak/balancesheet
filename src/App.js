import React, { Component } from "react";
import {
  getFormValues,
  getFormError,
  isDirty,
  isPristine,
  isValid,
  isInvalid,
  isSubmitting
} from "redux-form";

import Form from "./components/Form/Form";
import AllList from "./components/AllList/AllList";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";

import { H1, InnerWrapper, ExtWrapper } from "./styledComponent";
import { connect } from "react-redux";

class App extends Component {
  state = {
    IncomeList: [],
    ExpensesList: [],
    List: [],
    balance: 0,
    display: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.List.length !== prevState.List.length) {
      this.balance();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.createList();
    document.getElementById("form").reset();
  };

  createList = () => {
    const { values } = this.props;
    const it = {};
    it.amount = values.amount;
    it.description = values.description;
    it.type = values.type;
    it.eventDate = values.eventDate;
    this.setState({ List: [...this.state.List].concat(it) });
    values.type === "Income"
      ? this.setState({ IncomeList: [...this.state.IncomeList].concat(it) })
      : values.type === "Expenses" &&
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

  //   updateInput = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //     this.setState({
  //       amtErr: null,
  //       desErr: null,
  //       dateErr: null,
  //       typeErr: null
  //     });
  //   };

  toogleBalanceSheet = e => {
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
              button={this.toogleBalanceSheet}
              balance={this.state.balance}
              display={this.state.display}
            />
          ) : (
            <React.Fragment>
              <Form
                handleSubmit={this.handleSubmit}
                button={this.toogleBalanceSheet}
                display={this.state.display}
              />
              <AllList data={this.state.List} balance={this.state.balance} />
            </React.Fragment>
          )}
        </InnerWrapper>
      </ExtWrapper>
    );
  }
}

const mapStateToProps = state => ({
  values: getFormValues("form")(state),
  formError: getFormError("form")(state),
  dirty: isDirty("form")(state),
  pristine: isPristine("form")(state),
  valid: isValid("form")(state),
  invalid: isInvalid("form")(state),
  submitting: isSubmitting("form")(state)
});

export default connect(mapStateToProps)(App);
