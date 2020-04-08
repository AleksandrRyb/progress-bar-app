import React from "react";

const headers = ["Start", "End", "TimeSpent", "TotalTimeSpent"];

function TimerTable() {
  return (
    <div style={{ display: "inline-block" }}>
      <table>
        <tbody>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { TimerTable };
