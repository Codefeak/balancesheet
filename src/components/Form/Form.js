import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import formField from "./renderField";

import {
  Button,
  SelectWrapper,
  Option,
  Label,
  Err,
  FormWrapper
} from "../../styledComponent";

export const StyledForm = styled.form`
  margin: 120px 15px;
  display: grid;
  grid-template:
    "description description ."
    "amount amount .  "
    "income date . "
    "add view  ."/1fr 1fr;
  border: 1px dashed saddlebrown;
`;
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
const DateWrapper = styled.div`
  grid-area: date;
  display: flex;
  text-align: right;
`;
export const Select = styled(Field)`
  margin: 15px 0;
  height: 40px;
  flex-grow: 1;
`;

const AddBtn = styled(Button)`
  grid-area: add;
`;
const ViewBtn = styled(Button)`
  grid-area: view;
`;

const Form = props => {
  const { handleSubmit } = props;
  return (
    <FormWrapper>
      <StyledForm id="form" onSubmit={handleSubmit}>
        <DescInputWrapper>
          <Field
            name="description"
            component={formField}
            type="text"
            label="Description :"
            placeholder="Enter Description"
          />
          {props.desErr && <Err>{props.desErr}</Err>}
        </DescInputWrapper>
        <AmtInputWrapper>
          <Field
            name="amount"
            component={formField}
            type="text"
            label="Amount:"
            placeholder="Enter Amount"
          />
          {props.amtErr && <Err>{props.amtErr}</Err>}
        </AmtInputWrapper>
        <SelectWrapper>
          <Label>Select Type:</Label>
          <Select component="select" name="type">
            <Option>---</Option>
            <Option value="Income">Income</Option>
            <Option value="Expenses">Expenses</Option>
          </Select>
          {props.typeErr && alert(props.typeErr)}
        </SelectWrapper>
        <DateWrapper>
          <Field
            component={formField}
            name="eventDate"
            label="Date : "
            size="50px"
            type="date"
          />
        </DateWrapper>
        {props.dateErr && alert(props.dateErr)}
        <AddBtn type="Submit">Add</AddBtn>
        <ViewBtn onClick={props.button}>View BalanceSheet</ViewBtn>
      </StyledForm>
    </FormWrapper>
  );
};

export default reduxForm({ form: "form" })(Form);
