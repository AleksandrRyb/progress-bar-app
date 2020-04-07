import React from "react";

import { StyledInput } from "./number-input.styles";

function NumberInput({ placeholder }) {
  return (
    <>
      <StyledInput placeholder={placeholder} type="number" />
    </>
  );
}

export { NumberInput };
