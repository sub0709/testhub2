import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <div className="page-title-box">
              <Row>
                <Col lg={7}>
                  <h4 className="page-title">Welcome,</h4>
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

        <div class="row">
          <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div class="avatar-lg rounded-circle bg-soft-primary border-primary border">
                    <i class="fe-heart font-22 avatar-title text-primary"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      $<span data-plugin="counterup">58,947</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Total Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div class="avatar-lg rounded-circle bg-soft-success border-success border">
                    <i class="fe-shopping-cart font-22 avatar-title text-success"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">127</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Today's Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div class="avatar-lg rounded-circle bg-soft-info border-info border">
                    <i class="fe-bar-chart-line- font-22 avatar-title text-info"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">0.58</span>%
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Conversion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div class="avatar-lg rounded-circle bg-soft-warning border-warning border">
                    <i class="fe-eye font-22 avatar-title text-warning"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      <span data-plugin="counterup">78.41</span>k
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Today's Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-xl-6">
            <div class="card-box">
              <h4 class="header-title mb-3">Top 5 Users Balances</h4>

              <div class="table-responsive">
                <table class="table table-borderless table-hover table-centered m-0">
                  <thead class="thead-light">
                    <tr>
                      <th colspan="2">Profile</th>
                      <th>Currency</th>
                      <th>Balance</th>
                      <th>Reserved in orders</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "36px" }}>
                        <img
                          src="assets/images/users/user-2.jpg"
                          alt="contact-img"
                          title="contact-img"
                          class="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 class="m-0 font-weight-normal">Tomaslau</h5>
                        <p class="mb-0 text-muted">
                          <small>Member Since 2017</small>
                        </p>
                      </td>

                      <td>
                        <i class="mdi mdi-currency-btc text-primary"></i> BTC
                      </td>

                      <td>0.00816117 BTC</td>

                      <td>0.00097036 BTC</td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-light">
                          <i class="mdi mdi-plus"></i>
                        </a>
                        <a href="#none" class="btn btn-xs btn-danger">
                          <i class="mdi mdi-minus"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ width: "36px" }}>
                        <img
                          src="assets/images/users/user-3.jpg"
                          alt="contact-img"
                          title="contact-img"
                          class="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 class="m-0 font-weight-normal">Erwin E. Brown</h5>
                        <p class="mb-0 text-muted">
                          <small>Member Since 2017</small>
                        </p>
                      </td>

                      <td>
                        <i class="mdi mdi-currency-eth text-primary"></i> ETH
                      </td>

                      <td>3.16117008 ETH</td>

                      <td>1.70360009 ETH</td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-light">
                          <i class="mdi mdi-plus"></i>
                        </a>
                        <a href="#none" class="btn btn-xs btn-danger">
                          <i class="mdi mdi-minus"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "36px" }}>
                        <img
                          src="assets/images/users/user-4.jpg"
                          alt="contact-img"
                          title="contact-img"
                          class="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 class="m-0 font-weight-normal">
                          Margeret V. Ligon
                        </h5>
                        <p class="mb-0 text-muted">
                          <small>Member Since 2017</small>
                        </p>
                      </td>

                      <td>
                        <i class="mdi mdi-currency-eur text-primary"></i> EUR
                      </td>

                      <td>25.08 EUR</td>

                      <td>12.58 EUR</td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-light">
                          <i class="mdi mdi-plus"></i>
                        </a>
                        <a href="#none" class="btn btn-xs btn-danger">
                          <i class="mdi mdi-minus"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "36px" }}>
                        <img
                          src="assets/images/users/user-5.jpg"
                          alt="contact-img"
                          title="contact-img"
                          class="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 class="m-0 font-weight-normal">Jose D. Delacruz</h5>
                        <p class="mb-0 text-muted">
                          <small>Member Since 2017</small>
                        </p>
                      </td>

                      <td>
                        <i class="mdi mdi-currency-cny text-primary"></i> CNY
                      </td>

                      <td>82.00 CNY</td>

                      <td>30.83 CNY</td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-light">
                          <i class="mdi mdi-plus"></i>
                        </a>
                        <a href="#none" class="btn btn-xs btn-danger">
                          <i class="mdi mdi-minus"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "36px" }}>
                        <img
                          src="assets/images/users/user-6.jpg"
                          alt="contact-img"
                          title="contact-img"
                          class="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 class="m-0 font-weight-normal">Luke J. Sain</h5>
                        <p class="mb-0 text-muted">
                          <small>Member Since 2017</small>
                        </p>
                      </td>

                      <td>
                        <i class="mdi mdi-currency-btc text-primary"></i> BTC
                      </td>

                      <td>2.00816117 BTC</td>

                      <td>1.00097036 BTC</td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-light">
                          <i class="mdi mdi-plus"></i>
                        </a>
                        <a href="#none" class="btn btn-xs btn-danger">
                          <i class="mdi mdi-minus"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="card-box">
              <h4 class="header-title mb-3">Revenue History</h4>

              <div class="table-responsive">
                <table class="table table-borderless table-hover table-centered m-0">
                  <thead class="thead-light">
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
                        <h5 class="m-0 font-weight-normal">Themes Market</h5>
                      </td>

                      <td>Oct 15, 2018</td>

                      <td>$5848.68</td>

                      <td>
                        <span class="badge bg-soft-warning text-warning">
                          Upcoming
                        </span>
                      </td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 class="m-0 font-weight-normal">Freelance</h5>
                      </td>

                      <td>Oct 12, 2018</td>

                      <td>$1247.25</td>

                      <td>
                        <span class="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 class="m-0 font-weight-normal">Share Holding</h5>
                      </td>

                      <td>Oct 10, 2018</td>

                      <td>$815.89</td>

                      <td>
                        <span class="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 class="m-0 font-weight-normal">
                          Envato's Affiliates
                        </h5>
                      </td>

                      <td>Oct 03, 2018</td>

                      <td>$248.75</td>

                      <td>
                        <span class="badge bg-soft-danger text-danger">
                          Overdue
                        </span>
                      </td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 class="m-0 font-weight-normal">
                          Marketing Revenue
                        </h5>
                      </td>

                      <td>Sep 21, 2018</td>

                      <td>$978.21</td>

                      <td>
                        <span class="badge bg-soft-warning text-warning">
                          Upcoming
                        </span>
                      </td>

                      <td>
                        <a href="#none" class="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h5 class="m-0 font-weight-normal">
                          Advertise Revenue
                        </h5>
                      </td>

                      <td>Sep 15, 2018</td>

                      <td>$358.10</td>

                      <td>
                        <span class="badge bg-soft-success text-success">
                          Paid
                        </span>
                      </td>

                      <td>
                        <a href="#none" className="btn btn-xs btn-secondary">
                          <i class="mdi mdi-pencil"></i>
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
