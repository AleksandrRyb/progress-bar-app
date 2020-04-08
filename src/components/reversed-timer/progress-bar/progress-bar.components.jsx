import React from "react";

import { ProgressContainer, ProgressDone } from "./progress-bar.styles";

function ProgressBar({ start, done }) {
  // const percentage = ((done / start) * 100).toFixed(2);
  // const toDone = !isNaN(percentage) ? `${percentage}%` : 0;
  // console.log(toDone);
  return (
    <ProgressContainer>
      <ProgressDone />
    </ProgressContainer>
  );
}

export { ProgressBar };
