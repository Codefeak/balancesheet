import React from "react";
import AddNew from "./AddNew/AddNew";
import styled from "styled-components";

import { Entries, UL, ListWrapper } from "../../styledComponent";

const ULheader = styled(UL)`
  overflow: auto;
  font-weight: 600;
  margin-right: 15px;
`;
export const ULTotal = styled(UL)`
  border-width: 2px 0px 2px 0px;
  border-style: solid
`;

const Li1 = styled.li`
  grid-area: Des;
`;

class AllList extends React.Component {
  render() {
    return (
      <Entries>
        <h2>Entries List</h2>
        <div>
          <ULheader>
            <li>Description</li>
            <li>Amount</li>
            <li>Type</li>
            <li>Date of Events</li>
            <li>Time of Entry</li>
          </ULheader>
          <ListWrapper>
            <AddNew data={this.props.data} />
          </ListWrapper>
          <ULTotal>
            <li>Balance</li>
            <li>{this.props.balance}</li>
          </ULTotal>
        </div>
      </Entries>
    );
  }
}

export default AllList;
