import React from "react";

import { StyledButton } from "./timer-button.styles";

function TimerButton({ children }) {
  return (
    <>
      <StyledButton type="button">{children}</StyledButton>
    </>
  );
}

export { TimerButton };
