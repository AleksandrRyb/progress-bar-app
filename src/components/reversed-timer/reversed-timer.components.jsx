import React from "react";
import { connect } from "react-redux";
import { FaPlay, FaStop } from "react-icons/fa";

import { addItem } from "../../redux/actions";

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

const INITIAL_STATE = {
  minutes: "",
  seconds: "",
  progress: 0,
  total: null,
  spentTimeTotal: null,
  timerIdPlay: null,
  timerIdStop: null,
  startDate: null,
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "",
      seconds: "",
      progress: 0,
      total: null,
      spentTimeTotal: null,
      timerIdPlay: null,
      timerIdStop: null,
      startDate: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePlay = () => {
    const { minutes, seconds, timerIdStop, spentTimeTotal, total } = this.state;
    clearInterval(timerIdStop);
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
      const timeLeft = this.state.total - 1;
      if (timeLeft === 0) {
        const { startDate, progress, spentTimeTotal } = this.state;
        const item = {
          startDate,
          endDate: new Date(),
          time: progress,
          spentTimeTotal,
        };
        this.props.addItem(item);
        clearInterval(timerId);
        setTimeout(() => {
          this.setState(INITIAL_STATE);
        }, 2000);
      }
      this.setState({ total: timeLeft });
    }, 1000);

    if (!spentTimeTotal) {
      this.setState({ spentTimeTotal: totalSeconds });
    }

    if (!total) {
      this.setState({
        startDate: new Date(),
        timerIdPlay: timerId,
        progress: totalSeconds,
        total: totalSeconds,
      });
    }
  };

  handleStop = () => {
    if (this.state.total > 0) {
      clearInterval(this.state.timerIdPlay);
      let timerId = setInterval(() => {
        const spentTimeTotal = this.state.spentTimeTotal + 1;
        this.setState({ spentTimeTotal });
      }, 1000);

      this.setState({ timerIdStop: timerId });
    }
  };

  render() {
    const { seconds, minutes, total, progress } = this.state;
    console.log(this.props);
    return (
      <Root>
        <Container>
          <InputContainer>
            <NumberInput
              disabled={progress}
              placeholder="Minutes"
              value={minutes}
              name="minutes"
              onChange={this.handleChange}
            />
            <NumberInput
              disabled={progress}
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
            <ProgressBar total={total} progress={progress} />
          </ProgressContainer>
        </Container>
      </Root>
    );
  }
}

const ReversedTimer = connect(null, { addItem })(Timer);

export { ReversedTimer };
