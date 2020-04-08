import React from "react";

import { StyledButton } from "./timer-button.styles";

function TimerButton({ children, onClick, disabled }) {
  return (
    <StyledButton onClick={onClick} type="button" disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export { TimerButton };
