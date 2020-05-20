import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import axios from 'axios';
import AddressTable from "./AddressTable";

class Dashboard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : []
    };

    axios.get('https://tracker.icon.foundation/v3/address/list?page=1&count=25').then((ret) => {
        console.log(ret.data);
        this.setState ({
            list: ret.data.data
        })
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <Row>
            <div className="page-title-box">
                <h4 className="page-title">Address </h4>
            </div>
        </Row>

        <div className="row">
          <AddressTable list = {this.state.list} />
          <AddressTable list = {this.state.list} />
        </div>
      </React.Fragment>
    );
  }
}

export default connect() (Dashboard3);