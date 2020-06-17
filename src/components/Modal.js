import React, { Component } from "react";
import Bs4Modal from 'react-bootstrap4-modal';

class Modal extends Component {
  render() {
    console.log(this.props)
    return (
			<Bs4Modal visible={this.props.visible}>
				<div className="modal-header">
					<h5 className="modal-title"> {this.props.title}</h5>
					<button type="button" className="close" onClick={this.props.onClose}>
						<span aria-hidden="true" >&times;</span>
					</button>
				</div>
				<div className="modal-body">
          {this.props.body}
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary"> 
						{this.props.children}
					</button>
				</div>
			</Bs4Modal>
    );
  }
}

export default Modal;
