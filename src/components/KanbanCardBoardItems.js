import React, { Component } from "react";

class KanbanCardBoardItems extends Component {
  render() {
    return (
      <li id="task1">
        <span className={this.props.color}>
        {this.props.level}
        </span>
        <h5 className="mt-0">
          <a href="#none" className="text-dark">
            {this.props.topic}
          </a>
        </h5>
        <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
          <input type="checkbox" />
          <label></label>
        </div>
        <p>
          {this.props.desc}
        </p>
        <div className="clearfix"></div>
        <div className="row">
        <div className="col">
            <p className="font-13 mt-2 mb-0">
            <i className="mdi mdi-calendar"></i> {this.props.calendar}
            </p>
        </div>
        <div className="col-auto">
            <div className="text-right">
              <a href="#none" className="text-muted">
                    <img
                    src="assets/images/users/user-1.jpg"
                    alt="task-user"
                    className="avatar-sm img-thumbnail rounded-circle"
                    />
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default KanbanCardBoardItems;