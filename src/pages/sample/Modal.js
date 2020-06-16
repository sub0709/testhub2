import React, { Component } from "react";
import { connect } from "react-redux";
import Bs4Modal from 'react-bootstrap4-modal';

import Modal from '../../components/Modal';

class Inbox extends Component {
  constructor(props) {
	super(props);

	let btnType = [
		{	
		type      : 'button' ,
		className : 'btn btn-primary' ,
		onClick	  : 'this.toggleModal1' ,
		text      : '확인' ,
		}
	];

	this.state = {
	btnType     : btnType ,
	modal1State : false   ,
	modal2State : false   ,
	modal3State : false   ,
	modal4State : false   ,
	};
	
	this.toggleModal1 = this.toggleModal1.bind(this);
	this.toggleModal2 = this.toggleModal2.bind(this);
	this.toggleModal3 = this.toggleModal3.bind(this);
	this.toggleModal4 = this.toggleModal4.bind(this);
	this.beforeClose = this.beforeClose.bind(this);
	this.closed = this.closed.bind(this);

}
	
	toggleModal1() {
		this.setState({
			modal1State : !this.state.modal1State
		});
	}

	toggleModal2() {
		this.setState({
			modal2State : !this.state.modal2State
		});
	}

	toggleModal3() {
		this.setState({
			modal3State : !this.state.modal3State
		});
	}

	toggleModal4() {
		this.setState({
			modal4State : !this.state.modal4State
		});
	}

	beforeClose() {
		if(!window.confirm("닫을거야?")) {
			return;
		}
		this.toggleModal3();
	}

	closed() {
		this.toggleModal3();
		console.log('닫힘');
	}

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Modal</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
							<div className="btn-group">
								<button onClick={this.toggleModal1} type="button" className="btn btn-primary btn-sm waves-effect waves-light">
									모달1
								</button>
								<button onClick={this.toggleModal2} type="button" className="btn btn-info btn-sm waves-effect waves-light">
									모달2
								</button>
								<button onClick={this.toggleModal3} type="button" className="btn btn-success btn-sm waves-effect waves-light">
									모달3
								</button>
								<button onClick={this.toggleModal4} type="button" className="btn btn-secondary btn-sm waves-effect waves-light">
									예제
								</button>
							</div>

            </div>
          </div>
        </div>
		
				<Modal visible={this.state.modal1State} backdrop={this.toggleModal1} title="준비"
					onClick={this.toggleModal1} body="npm install react-bootstrap4-modal\n::<a href='https://www.npmjs.com/package/react-bootstrap4-modal' target='_blank' rel='noopener noreferrer'>https://www.npmjs.com/package/react-bootstrap4-modal</a>::\n모달 컴포넌트의 특징\n1. 화면 중앙에 노출하기 위한 CSS구조 또는 스크립트 연산 필요\n2. 공통된 디자인, 기능 존재\n3. 컨텐츠, 버튼등 모달별로 다른 구성 가능">

					{/* <div className="modal-body">
						<p>npm install react-bootstrap4-modal</p>
						<p><a href="https://www.npmjs.com/package/react-bootstrap4-modal" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/react-bootstrap4-modal</a></p>
						<p>모달 컴포넌트의 특징</p>
						<p>1. 화면 중앙에 노출하기 위한 CSS구조 또는 스크립트 연산 필요</p>
						<p>2. 공통된 디자인, 기능 존재</p>
						<p>3. 컨텐츠, 버튼등 모달별로 다른 구성 가능</p>
					</div> */}

					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={this.toggleModal1}>
							닫기
						</button>
					</div>
				</Modal>

				<Modal visible={this.state.modal2State} backdrop={this.toggleModal2}
					dialogClassName="modal-dialog-scrollable modal-sm" title="이전 모달과의 비교" onClick={this.toggleModal2}
					body="1. 모달 크기, 타이틀, 컨텐츠, 버튼 구성이 다름\n2. 닫기에 대한 기능은 동일함\n1. 모달안에 데이터 호출/저장등 비즈니스 로직이 들어갈수 있음\n2. 보통 모달을 오픈한 화면의 로직과 모달안의 비즈니스 로직은 별개로 동작하는 경우가 많다. 
					오픈한 화면에서는 모달 내 로직에 관여하지 않고 모달안의 처리 결과나 액션만 필요한 경우가 대부분이다.::<br/><div className='mb-1'>&nbsp;</div>::예) 모달 닫을때/닫았을때 이벤트, 모달에서 처리한 값 등\n3. 따라서 모달 팝업은 별도의 파일로 분리하는 것이 유지보수에 좋다. 아주 간단한 모달은 화면과 같이 둬도 괜찮다.">

					{/* <div className="modal-body">
						<p>1. 모달 크기, 타이틀, 컨텐츠, 버튼 구성이 다름\n2. 닫기에 대한 기능은 동일함</p>
						<p> 비즈니스 로직이 </p>
						<div className="mb-1">&nbsp;</div>
						<p>픈한 화면의 로직과</p>
						<p>에 관여하지 않고 모달안의 처리 결과나 액션만 필요한 경우가 대부분이다.<br/></p>
						<p>3. 따라서 모달 팝업은 별도의 파일로 분리하는 것이 유지보수에 좋다. 아주</p>
					</div> */}

					<div className="modal-footer">
						<button type="button" className="btn btn-secondary">
							저장
						</button>
						<button type="button" className="btn btn-primary" onClick={this.toggleModal2}>
							닫기
						</button>
					</div>
				</Modal>

				<Modal visible={this.state.modal3State} backdrop={this.toggleModal3}
					dialogClassName="modal-lg" title="Do it" onClick={this.toggleModal3} 
					body="개별 화면에서 모달 기  능이 필요할때 쓰기 쉽게 모달 컴포넌트를 만들어보자\n1. 이 화면에 있는 각기 다른 세가지 모달을 모달 컴포넌트로 대체할것\n2. toggleModal1(), toggleModal2(), toggleModal3(), beforeClose(), closed() 함수는 화면에 존재하는 함수이다. 모달X">
			
					<div className="modal-footer">
						<button onClick={this.beforeClose} type="button" className="btn btn-success">
							닫히기 전
						</button>
						<button onClick={this.closed} type="button" className="btn btn-info">
							닫힘
						</button>
						<button type="button" className="btn btn-primary" onClick={this.toggleModal3}>
							닫기
						</button>
					</div>
				</Modal>

				<Modal visible={this.state.modal4State} backDrop={this.toggleModal4}
					dialogName="modal-lg" onClick={this.toggleModal4} title="toggleModal4 제목"
					body="모달 컴포넌트를 만들어보자\n컴포넌트를 분리시켜보자\n세가지 모달을 모달 컴포넌트로 대체">
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={this.toggleModal4}>
							닫기
						</button>
					</div>
				</Modal>

      </React.Fragment>
    );
  }
}

export default connect()(Inbox);
