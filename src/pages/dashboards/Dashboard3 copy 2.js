import React, { Component } from "react";
// import { connect } from "react-redux";
import axios from 'axios';
import numeral from 'numeral';

class Dashboard333 extends Component {
    /* 초기 this.state를 지정하는 class constructor */
    constructor(props) {
        super(props)
        this.state = {
            dataList : []
         /*   addr : 123,
            blnc : 1.32549872,
            usdVal : 12,
            pcnt : 16,
            numOfTx : 78,
            addrType : 56123*/
            // blncLength : 0
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
        // let blnc = 0;
        this.state.dataList.forEach((data => {
            console.log(data);
            // let a = {data.balance.indexOf('.')}
            // {data.balance.length}
            // {data.icxUsd.length}
            // {data.txCount}
        }))

        return(
        // <React.Fragment>
            <div>
              {/* <TableComponent>
                <THead>
                <tr>
                      <th>Address</th>
                      <th>Balance</th>
                      <th>USD Value	</th>
                      <th>Percentage %</th>
                      <th>No of Txns</th>
                      <th>Address type</th>
                    </tr>       
                </THead>
                <TBody>

                </TBody>
              </TableComponent> */}
            <div className="card-box">
              <h2 className="page-title">Addresses</h2>
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
                  <tbody> 
                    {
                    this.state.dataList.map((data) => {
                        // console.log(data.balance)

                        // console.log(data, idx, arr[idx].balance.length)
                          console.log(numeral(data.balance).format('0.00000000'));


                        return(
                            
                            <tr key={data.address}>

                                <td>{data.address}</td>
        
                                {/* 3자리씩 끊어서 ,삽입하기. 소수점 제외 */}
                                {/* string.prototype.indexOf()를 통해 문자열을 비교 */}
                                {/* 인덱스 0~a 까지 콤마 삽입 */}
                                <td>{numeral(data.balance).format('0.00000000')} ICX
                                
                                
                                {/*data.balance.indexOf('.')*/}
                                {/* {data.balance.length } */}

                                {/* blnc = ({data.balance.indexOf('.')} > 0) ? {data.balance.indexOf('.')} : {data.balance.length} */}
                                {/* {blnc} */}
                                {/*
                                if ({data.balance.indexOf('.')} > 0) {
                                    this.setState({
                                        blncLength : data.balance.indexOf('.')
                                    })
                                } else {
                                    this.setState({
                                        blncLength : data.balance.length
                                    })
                                 */}

                                {/* 1.indexOf('.') -1이면 전체길이
                                      > 0 이면 소수점자른 길이
                                    2. 길이 % 3 */} 
                                
                                </td>

                                {/* arr[idx].icxUsd.length */}
                                <td>{data.icxUsd}USD{/*data.icxUsd.length*/}{/*data.icxUsd.indexOf('.')*/}</td>

                                <td>{data.percentage}%</td>
        
                                {/* arr[idx].txCount.length */}
                                <td>{data.txCount}</td>
        
                                <td>{data.nodeType}</td>
                            </tr>
                        );
                    })
                  }</tbody>
                </table>
              </div>
            </div>
          </div>
        // </React.Fragment>
        );
    }
}

export default Dashboard333;