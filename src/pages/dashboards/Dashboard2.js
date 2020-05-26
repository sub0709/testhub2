import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";

import axios from 'axios';

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName : 'abc',
      tmainInfo : {
        marketCap : 0
      },
      list : []
    };

    this.displayName2 = 'here'

    // function 함수 사용하면 안됨 (.then(function(ret) {)
    axios.get('https://tracker.icon.foundation/v0/main/mainInfo').then((ret) => {
      console.log(ret.data);
      this.setState ({
        tmainInfo : ret.data.tmainInfo,
        list : ret.data.tmainTx
      });

    });


  }

  // JSX ()
  makeIcx() {
    return(
      <span data-plugin="counterup">{this.state.tmainInfo.icxCirculationy}</span>
    )
  }

  componentDidMount() {
    // setState 안하면 업데이트안됨. 화면과 관련있는 부분 setState 하기
    this.displayName2 = 'infinite';
    this.setState({
      displayName : 'challenge'
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <div className="page-title-box">
              <Row>
                <Col lg={7}>
                  <h4 className="page-title">Welcome, {this.state.displayName} {this.displayName2}</h4>
                </Col>
                <Col lg={5} className="mt-lg-3 mt-md-0"></Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>Hello this is dashboard content</CardBody>
            </Card>
          </Col>
        </Row>

        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="widget-rounded-circle card-box">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                    <i className="fe-heart font-22 avatar-title text-primary"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-right">
                    <h3 className="text-dark mt-1">
                    $<span data-plugin="counterup">{Math.floor(this.state.tmainInfo.marketCap/100000)}</span>
                    </h3>
                    <p className="text-muted mb-1 text-truncate">Total Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="widget-rounded-circle card-box">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-success border-success border">
                    <i className="fe-shopping-cart font-22 avatar-title text-success"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-right">
                    <h3 className="text-dark mt-1">
                    <span data-plugin="counterup">{this.state.tmainInfo.icxSupply}</span>
                    </h3>
                    <p className="text-muted mb-1 text-truncate">Today's Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="widget-rounded-circle card-box">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-info border-info border">
                    <i className="fe-bar-chart-line- font-22 avatar-title text-info"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-right">
                    <h3 className="text-dark mt-1">
                {/* <span data-plugin="counterup">{this.state.tmainInfo.icxCirculationy}</span>% */}
                    {this.makeIcx()}%
                    </h3>
                    <p className="text-muted mb-1 text-truncate">Conversion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="widget-rounded-circle card-box">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-warning border-warning border">
                    <i className="fe-eye font-22 avatar-title text-warning"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-right">
                    <h3 className="text-dark mt-1">
                    <span data-plugin="counterup">{this.state.tmainInfo.transactionCount}</span>
                    </h3>
                    <p className="text-muted mb-1 text-truncate">Today's Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-xl-6">
            <div className="card-box">
              <h4 className="header-title mb-3">Top 5 Users Balances</h4>

              <div className="table-responsive">
                <table className="table table-borderless table-hover table-centered m-0">
                  <thead className="thead-light">
                    <tr>
                      {/* <th colSpan="2">Profile</th> */}
                      <th>A</th>
                      <th>B</th>
                      <th>C</th>
                      <th>D</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      // forEach는 return 값이 없어서 사용못함
                      this.state.list.map((item) => {
                        // tr에 key = 유니크한 값을 넣어줘야함
                        return (<tr key={item.txHash}>
                                <td style={{ width: "36px" }}>
                                  {item.amount}
                                </td>
          
                                <td>{item.createDate}
                                </td>
          
                                <td>
                                  {item.fee}
                                </td>
          
                                <td>{item.state}</td>
                              </tr>
                              );
                      })
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card-box">
              <h4 className="header-title mb-3">Revenue History</h4>

              <div className="table-responsive">
                <table className="table table-borderless table-hover table-centered m-0">
                  <thead className="thead-light">
                    <tr>
                      <th>Marketplaces</th>
                      <th>Date</th>
                      <th>Payouts</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">Themes Market</h5>
                      </td>

                      <td>Oct 15, 2018</td>

                      <td>$5848.68</td>

                      <td>
                        <span className="badge bg-soft-warning text-warning">
                          Upcoming
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">Freelance</h5>
                      </td>

                      <td>Oct 12, 2018</td>

                      <td>$1247.25</td>

                      <td>
                        <span className="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">Share Holding</h5>
                      </td>

                      <td>Oct 10, 2018</td>

                      <td>$815.89</td>

                      <td>
                        <span className="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">
                          Envato's Affiliates
                        </h5>
                      </td>

                      <td>Oct 03, 2018</td>

                      <td>$248.75</td>

                      <td>
                        <span className="badge bg-soft-danger text-danger">
                          Overdue
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">
                          Marketing Revenue
                        </h5>
                      </td>

                      <td>Sep 21, 2018</td>

                      <td>$978.21</td>

                      <td>
                        <span className="badge bg-soft-warning text-warning">
                          Upcoming
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 className="m-0 font-weight-normal">
                          Advertise Revenue
                        </h5>
                      </td>

                      <td>Sep 15, 2018</td>

                      <td>$358.10</td>

                      <td>
                        <span className="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i className="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Dashboard2);
