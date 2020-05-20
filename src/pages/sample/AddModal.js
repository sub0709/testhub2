import React, { Component } from "react";
import { connect } from "react-redux";

class AddModal extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="modal-demo" style={{display:this.props.visible ? 'block' : 'none', position:'fixed', left:'100px', top:'100px'}}>
          <button
            type="button"
            className="close"
            onClick={this.props.onClickClose}
          >
            <span>&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="custom-modal-title">Add Members</h4>
          <div className="custom-modal-text text-left">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  placeholder="Enter position"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Enter company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
									className="btn btn-success waves-effect waves-light"
									onClick={this.props.onClickClose}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger waves-effect waves-light m-l-10"
                  onClick={this.props.onClickClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(AddModal);
