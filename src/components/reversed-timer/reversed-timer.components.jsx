import React from "react";

import { TimerButton } from "./timer-button";
import { ProgressBar } from "./progress-bar";
import { NumberInput } from "./number-input";

function ReversedTimer() {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        background: "red",
        display: "inline-block",
      }}
    >
      <div>
        <NumberInput></NumberInput>
        <NumberInput></NumberInput>
      </div>
      <div>
        <TimerButton />
        <TimerButton />
      </div>
      <div>
        <ProgressBar />
      </div>
    </div>
  );
}

export { ReversedTimer };
