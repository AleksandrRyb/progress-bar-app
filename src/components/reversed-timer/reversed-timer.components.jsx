import React from "react";
import { FaPlay, FaStop } from "react-icons/fa";

import { TimerButton } from "./timer-button";
import { ProgressBar } from "./progress-bar";
import { NumberInput } from "./number-input";

import {
  Root,
  Container,
  InputContainer,
  ButtonContainer,
  ProgressContainer,
} from "./reversed-timer.styles";

function ReversedTimer() {
  return (
    <Root>
      <Container>
        <InputContainer>
          <NumberInput placeholder="Minutes" />
          <NumberInput placeholder="Secunds" />
        </InputContainer>
        <ButtonContainer>
          <TimerButton>
            <FaPlay />
          </TimerButton>
          <TimerButton>
            <FaStop />
          </TimerButton>
        </ButtonContainer>
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
      </Container>
    </Root>
  );
}

export { ReversedTimer };
