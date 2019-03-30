import styled from "styled-components";

export const ExtWrapper = styled.div`
  background: white;
  width: 80%;
  margin: 20px auto;
`;

export const Button = styled.button`
  margin: 40px 15px;
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
  min-width: ${props => props.size || "100px"};
  max-width: ${props => props.size || "100px"};
  align-self: center;
`;

export const SelectWrapper = styled.div`
  grid-area: income;
  display: flex;
  align-items: center;
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
  height: 600px;
  margin: 15px;
`;
export const BSWrapper = styled.section`
  display: grid;
  grid-template: "income expenses" auto;
`;

export const Income = styled.div`
  grid-aread: income;
  flex-grow: 1;
`;
export const Expenses = styled.div`
  grid-aread: expenses;
`;
export const UL = styled.ul`
  list-style: none;
  display: grid;
  // grid-template: "Des Amt T D TOE";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font-size: 0.8em;
`;
export const ListWrapper = styled.div`
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;
`;

export const Input = styled.input`
  margin: 15px 0;
  flex-grow: 1;
  height: 30px;
  font-size: medium;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-rows: 140px;
  align-self: flex-end;
  grid-template-columns: 1fr 1fr;
`;
