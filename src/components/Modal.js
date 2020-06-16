import React, { Component } from "react";
import Bs4Modal from 'react-bootstrap4-modal';
import ReactHtmlParser from 'react-html-parser';

let parse = require('html-react-parser');

class Modal extends Component {
  render() {
    return (
		<Bs4Modal visible={this.props.visible} onClickBackdrop={this.props.backDrop} 
			dialogClassName={this.props.dialogName} title={this.props.title}> {/* onClickBackdrop, dialogClassName, title 추가 */}
			<div className="modal-header">
				<h5 className="modal-title">{this.props.title}</h5>
				<button type="button" className="close" onClick={this.props.onClick}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<Content body={this.props.body}/>
			{this.props.children}
		</Bs4Modal>
    );
  }
}

function FooterContent(props) {
	return (
		<div className="modal-footer">
			{/* 버튼 개수 / 버튼의 className, onClick */}
			<button type="button" className="btn btn-primary" onClick={props.onClick}>
				닫기
			</button>
		</div>
	);
}

function Content(props) {
	let bodyData = props.body;

	return (
		<div className="modal-body">
			{bodyData.split('\\n').map(line => {
				console.log("line... : ", line)

				if(line.indexOf('::') > -1) {
					// let str2 = parse(line);
					let str = line.split('::');
					// let str3 = parse(str2);
					console.log("str", str);

					return (ReactHtmlParser(str));
				} else {
					return (<p>{line}</p>);
				}
			})}
		</div>
	);
}

export default Modal;
