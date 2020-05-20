import React, { Component } from "react";
class TheadComponent extends Component {
  render() {
    return (
      <thead className="thead-light">
        <tr>
          <th>Address</th>
          <th>Balance</th>
          <th>USD Value	</th>
          <th>Percentage %</th>
          <th>No of Txns</th>
          <th>Address type</th>
        </tr>
      </thead>
    )
  }
}
export default TheadComponent;
