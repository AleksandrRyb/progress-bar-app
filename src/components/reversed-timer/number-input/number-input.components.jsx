import React from "react";

import { StyledInput } from "./number-input.styles";

function NumberInput({ placeholder, value, onChange, name }) {
  return (
    <>
      <StyledInput
        name={name}
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export { NumberInput };
