import React from "react";
import {
  Button,
  Input,
  StyledForm,
  Label,
  Select,
  SelectWrapper,
  Option,
  Err,
  FormWrapper
} from "../../styledComponent";
import styled from "styled-components";

const DescInputWrapper = styled.div`
  grid-area: description;
  display: flex;
  align-items: center;
  position: relative;
`;
const AmtInputWrapper = styled.div`
  grid-area: amount;
  display: flex;
  align-items: center;
  position: relative;
`;
const DateInput = styled(Input)`
  grid-area: date;
  flex-grow: 1;
`;

const AddBtn = styled(Button)`
  grid-area: add;
`;
const ViewBtn = styled(Button)`
  grid-area: view;
`;

const Form = props => {
  return (
    <FormWrapper>
      {console.log(props)}
      <StyledForm action="" onSubmit={props.submit}>
        <DescInputWrapper>
          <Label htmlFor="description">Description:</Label>
          <Input
            id="description"
            type="text"
            placeholder="Description"
            name="description"
            onChange={props.update}
          />
          {props.desErr && <Err>{props.desErr}</Err>}
        </DescInputWrapper>
        <AmtInputWrapper>
          <Label htmlFor="amount">Amount:</Label>
          <Input
            id="amount"
            type="text"
            placeholder="Amount"
            name="amount"
            onChange={props.update}
          />
          {props.amtErr && <Err>{props.amtErr}</Err>}
        </AmtInputWrapper>
        <SelectWrapper>
          <Label>Select Type</Label>
          <Select onChange={props.update} name="type">
            <Option name="Income">Income</Option>
            <Option name="Expenses">Expenses</Option>
          </Select>
        </SelectWrapper>
        <DateInput type="date" name="eventDate" onChange={props.update} />
        <AddBtn type="Submit">Add</AddBtn>
        <ViewBtn onClick={props.button}>
          View BalanceSheet
        </ViewBtn>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
