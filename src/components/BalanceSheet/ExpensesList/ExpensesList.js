import React from "react";
import styled from "styled-components";

import { Expenses, UL, ListWrapper } from "../../../styledComponent";
import { ULTotal } from "../../AllList/AllList";

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
          <ULTotal>
            <li>Total Expenses</li>
            <li />
          </ULTotal>
        </div>
      </Expenses>
    );
  }
}

export default ExpensesList;
