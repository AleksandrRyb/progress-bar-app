import React from "react";

import { StyledInput } from "./number-input.styles";

function NumberInput({ placeholder, value, onChange, name, disabled }) {
  return (
    <StyledInput
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}

export { NumberInput };
