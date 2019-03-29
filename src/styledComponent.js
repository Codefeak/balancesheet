import styled from "styled-components";

export const ExtWrapper = styled.div`
  background: white;
  width: 80%;
  margin: 20px auto;
`;

export const Button = styled.button`
  margin: 15px;
  min-width: ${props => props.width || "200px"};
  max-width: ${props => props.width || "200px"};
  padding: 20px;
  background: transparent;
  border: 2px solid black;
  border-radius: 5px;
  font-size: large;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;

export const Label = styled.label`
  margin: 15px;
  min-width: 100px;
`;

export const Input = styled.input`
  margin: 15px;
  flex-grow: 1;
  height: 30px;
  font-size: medium;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
`;

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
export const SelectWrapper = styled.div`
  grid-area: income;
  display: flex;
  align-items: center;
`;
export const Select = styled.select`
  margin: 15px;
  height: 40px;
  flex-grow: 1;
`;
export const Option = styled.option`
  font-size: 14px;
`;

export const H1 = styled.h1`
  width: fit-content;
  margin: 0;
  padding: 25px;
  border: 2px solid;
  border-bottom: 0px;
  border-radius: 5px 5px 0 0;
  background: #cad6dc63;
`;

export const InnerWrapper = styled.section`
  border: 2px solid;
  background: #cad6dc63;
  box-shadow: 0px 12px 20px 0 #80808070;
  display: grid;
  grid-template:
    "form entries"
    "form entries"
    "bs bs";
`;

export const Err = styled.span`
  color: red;
  font-size: 10px;
  margin: 0 15px;
  position: absolute;
  right: 0;
`;

export const FormWrapper = styled.div`
  grid-area: form;
`;

export const Entries = styled.div`
  grid-area: entries;
  overflow: auto;
  height: 600px;
`;

export const BS = styled.div`
  grid-area: bs;
  display: grid;
  grid-template: "income expenses" auto;
`;

export const Income = styled.div`
  grid-aread: income;
`;
export const Expenses = styled.div`
  grid-aread: expenses;
`;
export const UL = styled.ul`
  list-style: none;
  display: grid;
  grid-template: "Des Amt T D TOE";
`;
export const ListWrapper = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;
