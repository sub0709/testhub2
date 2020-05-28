import React, { Component } from "react";

class InboxItems extends Component {
  render() {
    return (
        <li className={this.props.readf}>
        <div className="col-mail col-mail-1">
          <div className="checkbox-wrapper-mail">
            <input type="checkbox" id="chk1" />
            <label htmlFor="chk1" className="toggle"></label>
          </div>
          <span className="star-toggle far fa-star text-warning"></span>
          <a href="#none" className="title">
          {this.props.title}
          </a>
        </div>
        <div className="col-mail col-mail-2">
          <a href="#none" className="subject">
            {this.props.subject} &nbsp;&ndash;&nbsp;
            <span className="teaser">
              {this.props.teaser}
            </span>
          </a>
          <div className="date">{this.props.date}</div>
        </div>
      </li>
    );
  }
}

export default InboxItems;