import React from "react";
import styled from "styled-components";

import { Input, Label } from "../../styledComponent";

const FormField = ({
  input: { value: originalVal, ...input } = { value: "" },
  type,
  label,
  size,
  key,
  meta: { error }
}) => {
  const { name } = input;
  return (
    <React.Fragment>
      <Label htmlFor={name} size={size}>
        {label}
      </Label>
      <Input {...input} type={type} name={name} id={name} />
      {/* <span>{error && console.log(error)}</span> */}
    </React.Fragment>
  );
};

export default FormField;
