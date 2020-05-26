import React, { Component } from "react";

class InboxContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }




    render() {
        return(
            <li className={this.props.unread}>
                <div className="col-mail col-mail-1">
                    <div className="checkbox-wrapper-mail">
                        <input type="checkbox" id="chk1" />
                        <label htmlFor="chk1" className="toggle"></label>
                    </div>

                    <span className={'star-toggle far fa-star ' + this.props.star}></span>
                    <a href="#none" className="title">{this.props.title}</a>
                </div>

                <div className="col-mail col-mail-2">
                    <a href="#none" className="subject">
                        {this.props.subject}
                        <span className="teaser">{this.props.teaser}</span>
                    </a>
                    <div className="date">{this.props.date}</div>
                </div>
            </li>
        )

    }
}

export default InboxContentComponent;