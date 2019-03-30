import React, { Component } from "react";
import { getFormValues, reset } from "redux-form";
import { connect } from "react-redux";

import Form from "./components/Form/Form";
import AllList from "./components/AllList/AllList";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";

import { H1, InnerWrapper, ExtWrapper } from "./styledComponent";

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

  formSubmit = (values, dispatch) => {
    this.createList();
    dispatch(reset('form'));
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
                formSubmit={this.formSubmit}
                button={this.toogleBalanceSheet}
                display={this.state.display}
                {...this.props}
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
  values: getFormValues("form")(state)
});

export default connect(mapStateToProps)(App);
