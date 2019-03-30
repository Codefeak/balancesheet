import React from "react";

const validate = values => {
  const errors = {};
  if (!values.description || values.description === null) {
    errors.description = "Required!!!";
  } else if (!/[A-Za-z0-9]+$/.test(values.description)) {
    errors.description = "Cannot have special characters!!!";
  }
  if (!values.amount || values.amount === null) {
    errors.amount = "Required!!!";
  } else if (!/[0-9]+$/.test(values.amount)) {
    errors.amount = "can only have numeric values!!!";
  }
  if (!values.type || values.type === "---") {
    errors.type = "Required!!!";
  }
  if (values.eventDate === undefined) {
    errors.eventDate = "Required!!!";
  }
  return errors;
};

export default validate;
