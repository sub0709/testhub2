import React, { Component } from "react";
import Bs4Modal from 'react-bootstrap4-modal';

class Modal extends Component {
  render() {
    return (
			<Bs4Modal visible={this.props.visible}>
				<div className="modal-header">
					<h5 className="modal-title">준비</h5>
					<button type="button" className="close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary">
						닫기
					</button>
				</div>
			</Bs4Modal>
    );
  }
}

export default Modal;
