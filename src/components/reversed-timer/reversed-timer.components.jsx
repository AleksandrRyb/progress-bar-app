import React, { useState } from "react";
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

const defaultTime = {
  minutes: "",
  seconds: "",
  total: 0,
};

const defaultProgress = {
  start: 0,
  done: 0,
};

function ReversedTimer() {
  const [time, setTime] = useState(defaultTime);
  const [progress, setProgress] = useState(defaultProgress);

  const handleChange = (e) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlay = () => {
    const { minutes, seconds } = time;
    const newMinutes = Number.parseInt(minutes);
    const newSeconds = Number.parseInt(seconds);
    let totalInSeconds;
    if (newMinutes && newSeconds) {
      totalInSeconds = newMinutes * 60 + newSeconds;
    } else if (newMinutes && !newSeconds) {
      totalInSeconds = newMinutes * 60;
    } else {
      totalInSeconds = newSeconds;
    }

    if (!time.total) {
      setTime({ ...time, total: totalInSeconds });
    }
    setTime((prevTime) => prevTime.total - 1);

    if (!progress.done) {
      setProgress({ progress, done: totalInSeconds });
    }
    setProgress((prevProgress) => prevProgress.start + 1);
  };

  return (
    <Root>
      <Container>
        <InputContainer>
          <NumberInput
            placeholder="Minutes"
            value={time.minutes}
            name="minutes"
            onChange={handleChange}
          />
          <NumberInput
            placeholder="Seconds"
            value={time.seconds}
            onChange={handleChange}
            name="seconds"
          />
        </InputContainer>
        <ButtonContainer>
          <TimerButton onClick={handlePlay}>
            <FaPlay />
          </TimerButton>
          <TimerButton>
            <FaStop />
          </TimerButton>
        </ButtonContainer>
        <ProgressContainer>
          <ProgressBar start={progress.start} done={progress.done} />
        </ProgressContainer>
      </Container>
    </Root>
  );
}

export { ReversedTimer };
