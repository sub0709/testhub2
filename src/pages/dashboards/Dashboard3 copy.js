import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

// https://tracker.icon.foundation/v3/address/list?page=1&count=25


class Dashboard33 extends Component {

    /* 초기 this.state를 지정하는 class constructor */
    constructor(props) {
        super(props)
        this.state = {
            dataList : [],
         /*   addr : 123,
            blnc : 1.32549872,
            usdVal : 12,
            pcnt : 16,
            numOfTx : 78,
            addrType : 56123*/
            blncLength : 0
        }

        axios.get('https://tracker.icon.foundation/v3/address/list?page=1&count=50').then((ret) => {
            // console.log(ret.data.data);
            // hash addr = ret.data.data[25]
            // address, balance, icxUsd, percentage, txCount, nodeType
            this.setState({
                dataList : ret.data.data
            }) 
        });
    }


    render() {
        return(
        // <React.Fragment>
            <div>  {/*className="col-xl-6"*/}
            <div> {/* className="card-box" style={{width:'400px', hieght:'400px'}}> */}
              <h2>Addresses</h2> {/* className="header-title mb-3" */}

              <div className="table-responsive">
                <table className="table table-borderless table-hover table-centered m-0">
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
                  <tbody> {
                    this.state.dataList.map((data, idx, arr) => {
                        // console.log(data.address)
                        // console.log(data, idx, arr[idx].balance.length)
                        return(
                            <tr key={data.address}>
                                <td>{data.address}</td>
                                <td>{data.balance}ICX </td>
                                <td>{data.icxUsd}USD</td>
                                <td>{data.percentage}%</td>
                                <td>{data.txCount}</td>
                                <td>{data.nodeType}</td>
                            </tr>
                        );
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        // </React.Fragment>
        );
    }
}

export default Dashboard33;