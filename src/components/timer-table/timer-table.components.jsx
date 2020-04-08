import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const headers = ["Start", "End", "TimeSpent", "TotalTimeSpent"];

function Table({ items }) {
  return (
    <div style={{ display: "inline-block" }}>
      <table>
        <tbody>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{moment(item.startDate).format("h:mm:ss a")}</td>
              <td>{moment(item.endDate).format("h:mm:ss a")}</td>
              <td>{item.time}</td>
              <td>{item.spentTimeTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state,
});

const TimerTable = connect(mapStateToProps)(Table);

export { TimerTable };
