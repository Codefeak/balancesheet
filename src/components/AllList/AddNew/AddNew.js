import React from "react";
import moment from "moment";
import styled from "styled-components";

import { UL } from "../../../styledComponent";

const ULlist = styled(UL)`
`;

const AddNew = props => {
  return props.data.map(item => {
    return (
      <ULlist key={Math.random()}>
        <li>{item.description}</li>
        <li>{item.amount}</li>
        <li>{item.type}</li>
        <li>{item.eventDate}</li>
        <li>{moment().format("l")}</li>
      </ULlist>
    );
  });
};

export default AddNew;
