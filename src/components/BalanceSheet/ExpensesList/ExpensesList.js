import React from "react";
import styled from "styled-components";

import { Expenses, UL, ListWrapper } from "../../../styledComponent";

const ULheader = styled(UL)`
  overflow: auto;
  font-weight: 600;
`;

const ULlist = styled(UL)``;

class ExpensesList extends React.Component {
  sum = () => {
    this.props.data.map(item => {
      return (item += Number(item));
    });
  };
  render() {
    return (
      <Expenses>
        <div>
          <ULheader>
            <li>Description</li>
            <li>Date of Events</li>
            <li>Time of Entry</li>
            <li>Amount</li>
          </ULheader>
          <ListWrapper>
            {this.props.data.map(item => {
              return (
                <ULlist key={Math.random()}>
                  <li>{item.description}</li>
                  <li>{item.date}</li>
                  <li>{item.time}</li>
                  <li>{item.amount}</li>
                </ULlist>
              );
            })}
          </ListWrapper>
          <UL>
            <li>Total Expenses</li>
            <li />
          </UL>
        </div>
      </Expenses>
    );
  }
}

export default ExpensesList;
