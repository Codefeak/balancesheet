import React from "react";
import AddNew from "./AddNew/AddNew";
import styled from "styled-components";

import { Entries, UL, ListWrapper } from "../../styledComponent";

const ULheader = styled(UL)`
  overflow: auto;
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
            <Li1>Description</Li1>
            <li>Amount</li>
            <li>Type</li>
            <li>Date of Events</li>
            <li>Time of Entry</li>
          </ULheader>
          <ListWrapper>
            <AddNew data={this.props.data} />
          </ListWrapper>
          <UL>
            <li>Balance</li>
            <li>{this.props.balance}</li>
          </UL>
        </div>
      </Entries>
    );
  }
}

export default AllList;
