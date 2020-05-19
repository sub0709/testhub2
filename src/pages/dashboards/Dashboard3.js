import React, { Component } from "react";
// import { connect } from "react-redux";
import axios from 'axios';
import numeral from 'numeral';

class CardboxComponent extends Component {
  render() {
    return (
      <div className="card-box">
        <h2 className="page-title">Addresses</h2>
        <div className="table-responsive">
          <table className="table table-borderless table-hover table-centered m-0">
            <TheadComponent></TheadComponent>
            <TbodyComponent></TbodyComponent>
          </table>
        </div>
      </div>
    )
  }

}

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

class TbodyComponent extends Component {
  render() {
    
    return (
      this.state.dataList.map((data) => {
        return(
          <tr key={data.address}>
            <td style={{color:'#1aaaba'}}>{data.address}</td>

            {/* /* 소수점 존재하는만큼만 출력. 뒤에 불필요한 0제외 */}
            <td>{numeral(data.balance).format('0,.0000')} ICX</td>

            <td>{numeral(data.icxUsd).format('0,.000')} USD</td>

            <td>{numeral(data.percentage).format('0.0000')}%</td>

            <td>{numeral(data.txCount).format('0,0')}</td>

            <td>{data.nodeType}</td>
          </tr>  )
      })
    )
  }
}


class Dashboard3 extends Component {
    /* 초기 this.state를 지정하는 class constructor */
    constructor(props) {
        super(props)
        this.state = {
            dataList : []
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


    componentDidMount() {
        // setState 안하면 업데이트안됨. 화면과 관련있는 부분 setState 하기
        this.displayName2 = 'infinite';
        this.setState({
          displayName : 'challenge'
        });
    }


    render() {

        return(
          <div>
            <div className="card-box">
              <h2 className="page-title">Addresses</h2>
              <div className="table-responsive">
                <table className="table table-borderless table-hover table-centered m-0">
                  <TheadComponent>
                  </TheadComponent>

                  <tbody> 
                        {
                        this.state.dataList.map((data) => {

                          // console.log(data.balance)
                          // console.log(data, idx, arr[idx].balance.length)
                          // console.log(numeral(data.balance).format('0.00000000'));
                          return(
                            <tr key={data.address}>
                              <td style={{color:'#1aaaba'}}>{data.address}</td>

                              {/* 소수점 존재하는만큼만 출력. 뒤에 불필요한 0제외 */}
                              <td>{numeral(data.balance).format('0,.0000')} ICX</td>

                              <td>{numeral(data.icxUsd).format('0,.000')} USD</td>

                              <td>{numeral(data.percentage).format('0.0000')}%</td>

                              <td>{numeral(data.txCount).format('0,0')}</td>

                              <td>{data.nodeType}</td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          // <CardboxComponent></CardboxComponent>
        )
    }
}

export default Dashboard3;