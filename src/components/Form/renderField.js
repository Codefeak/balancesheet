import React from "react";
import styled from "styled-components";

import { Input, Label,Err } from "../../styledComponent";

const FormField = ({
  input: { value: originalVal, ...input } = { value: "" },
  type,
  label,
  size,
  key,
  meta: { touched, error }
}) => {
  const { name } = input;
  return (
    <React.Fragment>
      <Label htmlFor={name} size={size}>
        {label}
      </Label>
      <Input {...input} type={type} name={name} id={name} />
      {touched && (error && <Err>{ error}</Err>)}
    </React.Fragment>
  );
};

export default FormField;
