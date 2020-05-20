import React, { Component } from "react";

class AddressTable extends Component {
  render() {
    return (
        <div className="col-xl-6">
        <div className="card-box">
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-centered m-0">
              <thead className="thead-light">
                <tr>
                  <th>Address</th>
                  <th>Balance</th>
                  <th>USD Value</th>
                  <th>Percentage %</th>
                  <th>No of Txns</th>
                  <th>Address type</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.list.map( (item) => {
                      console.log(item);
                    return ( 
                        <tr key= {item.address}>
                            <td> {item.address} </td>
                            <td> {item.balance} </td>
                            <td> {item.icxUsd} </td>
                            <td> {item.nodeType} </td>
                            <td> {item.percentage} </td>
                            <td> {item.txCount} </td>
                        </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressTable;