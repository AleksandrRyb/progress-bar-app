import React from "react";

import { ProgressContainer, ProgressDone } from "./progress-bar.styles";

function ProgressBar({ total, progress }) {
  let percentage;
  if (progress) {
    percentage = (((progress - total) / (total + progress)) * 100).toFixed(2);
  } else {
    percentage = 0;
  }

  return (
    <ProgressContainer>
      <ProgressDone style={{ width: percentage + "%" }} />
    </ProgressContainer>
  );
}

export { ProgressBar };
