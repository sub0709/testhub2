import React, { Component } from "react";
// import { connect } from "react-redux";

import TheadComponent from '../../components/TheadComponent';
import TbodyComponent from '../../components/TbodyComponent';

import axios from 'axios';


// class CardboxComponent extends Component {
//   render() {
//     return (
//       <div className="card-box">
//         <h2 className="page-title">Addresses</h2>
//         <div className="table-responsive">
//           <table className="table table-borderless table-hover table-centered m-0">
//             <TheadComponent></TheadComponent>
//             <TbodyComponent></TbodyComponent>
//           </table>
//         </div>
//       </div>
//     )
//   }
// }

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
									<TbodyComponent
										list={this.state.dataList}>
										
									</TbodyComponent>

                </table>
              </div>
            </div>
          </div>

          // <CardboxComponent></CardboxComponent>
        )
    }
}

export default Dashboard3;