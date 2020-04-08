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

class ReversedTimer extends React.Component {
  state = {
    minutes: "",
    seconds: "",
    total: null,
    start: 0,
    done: 0,
    timerId: null,
    stop: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePlay = () => {
    this.setState({ stop: false });
    const { minutes, seconds, stop } = this.state;
    const newMinutes = Number.parseInt(minutes);
    const newSeconds = Number.parseInt(seconds);
    let totalSeconds;
    if (newMinutes && newSeconds) {
      totalSeconds = newMinutes * 60 + newSeconds;
    } else if (newMinutes && !newSeconds) {
      totalSeconds = newMinutes * 60;
    } else {
      totalSeconds = newSeconds;
    }

    let timerId = setInterval(() => {
      this.setState({ timerId });

      totalSeconds = -1;
      const timeLeft = this.state.total - 1;
      if (timeLeft === 0) {
        clearInterval(timerId);
      }
      this.setState({ total: timeLeft });
    }, 1000);

    if (!stop) {
      this.setState({ total: totalSeconds });
    }
  };

  handleStop = () => {
    this.setState({ stop: true });
    clearInterval(this.state.timerId);
  };

  render() {
    console.log(this.state.timerId);
    const { start, done, seconds, minutes, total } = this.state;

    return (
      <Root>
        <Container>
          <InputContainer>
            <NumberInput
              disabled={total}
              placeholder="Minutes"
              value={minutes}
              name="minutes"
              onChange={this.handleChange}
            />
            <NumberInput
              disabled={total}
              placeholder="Seconds"
              value={seconds}
              onChange={this.handleChange}
              name="seconds"
            />
          </InputContainer>
          <div style={{ color: "#fff" }}>{total ? `${total} sec` : "0"}</div>
          <ButtonContainer>
            <TimerButton onClick={this.handlePlay}>
              <FaPlay />
            </TimerButton>
            <TimerButton onClick={this.handleStop}>
              <FaStop />
            </TimerButton>
          </ButtonContainer>
          <ProgressContainer>
            <ProgressBar start={start} done={done} />
          </ProgressContainer>
        </Container>
      </Root>
    );
  }
}

export { ReversedTimer };
