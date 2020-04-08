import React from "react";

import { StyledButton } from "./timer-button.styles";

function TimerButton({ children, onClick }) {
  return (
    <StyledButton onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
}

export { TimerButton };
