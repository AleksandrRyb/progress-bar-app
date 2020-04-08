import React from "react";

import "./App.css";

import { ReversedTimer } from "./components/reversed-timer";
import { TimerTable } from "./components/timer-table";

function App() {
  return (
    <div className="App">
      <ReversedTimer />
      <TimerTable />
    </div>
  );
}

export default App;
