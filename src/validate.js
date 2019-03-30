import React from "react";

const validate = values => {
  const errors = {};
  if (!values.description || values.description === null) {
    errors.description = "Required!!!";
  } else if (!/[A-Za-z0-9]/.test(values.description)) {
    errors.description = "Cannot have special characters!!!";
  }
  if (!values.amount || values.amount === null) {
    errors.description = "Required!!!";
  } else if (!/[0-9]/.test(values.amount)) {
    errors.description = "can only have numeric values!!!";
  }
  if (!values.type || values.type === null) {
    errors.description = "Required!!!";
  }
  if (!values.eventDate || values.eventDate === null) {
    errors.description = "Required!!!";
  }
  return errors;
};

export default validate;
