import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Bs4Modal from 'react-bootstrap4-modal';
import Modal from '../../components/Modal';

const Modal1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prev => !prev)
  }
  return(
    <React.Fragment>
      <button onClick={handleOpen} type="button" className="btn btn-primary btn-sm waves-effect waves-light">
        모달1
      </button>
      <Modal visible={open} title='ffff' onClose={handleOpen}>
        <div className="diallog-1">
          <p>npm install react-bootstrap4-modal</p>
          <p><a href="https://www.npmjs.com/package/react-bootstrap4-modal" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/react-bootstrap4-modal</a></p>
          <p>모달 컴포넌트의 특징</p>
          <p>1. 화면 중앙에 노출하기 위한 CSS구조 또는 스크립트 연산 필요</p>
          <p>2. 공통된 디자인, 기능 존재</p>
          <p>3. 컨텐츠, 버튼등 모달별로 다른 구성 가능</p>
        </div>
      </Modal>
    </React.Fragment>
  )
}

const Modal2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prev => !prev)
  }
  return(
    <React.Fragment>
      <button onClick={handleOpen} type="button" className="btn btn-info btn-sm waves-effect waves-light">
        모달2
      </button>
      <Modal visible={open} title='ffff' onClose={handleOpen}>
        <div className="diallog-1">
          <p>1. 모달 크기, 타이틀, 컨텐츠, 버튼 구성이 다름</p>
          <p>2. 닫기에 대한 기능은 동일함</p>
          <div className="mb-1">&nbsp;</div>
          <p>1. 모달안에 데이터 호출/저장등 비즈니스 로직이 들어갈수 있음</p>
          <p>2. 보통 모달을 오픈한 화면의 로직과 모달안의 비즈니스 로직은 별개로 동작하는 경우가 많다. 
            오픈한 화면에서는 모달 내 로직에 관여하지 않고 모달안의 처리 결과나 액션만 필요한 경우가 대부분이다.<br/>
            예) 모달 닫을때/닫았을때 이벤트, 모달에서 처리한 값 등</p>
          <p>3. 따라서 모달 팝업은 별도의 파일로 분리하는 것이 유지보수에 좋다. 아주 간단한 모달은 화면과 같이 둬도 괜찮다.</p>
        </div>
      </Modal>
    </React.Fragment>

  )
}


class Inbox extends Component {
  constructor(props) {
    super(props);
		this.state = {
			modal1State : false,
			modal2State : false,
			modal3State : false,
			modal4State : false,
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
								{/* <button onClick={this.toggleModal1} type="button" className="btn btn-primary btn-sm waves-effect waves-light">
									모달1
								</button> */}
                <Modal1 />
								{/* <button onClick={this.toggleModal2} type="button" className="btn btn-info btn-sm waves-effect waves-light">
									모달2
								</button> */}
                <Modal2 />
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

				<Bs4Modal visible={this.state.modal1State} onClickBackdrop={this.toggleModal1}>
					<div className="modal-header">
						<h5 className="modal-title">준비</h5>
						<button type="button" className="close" onClick={this.toggleModal1}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
            <p>npm install react-bootstrap4-modal</p>
            <p><a href="https://www.npmjs.com/package/react-bootstrap4-modal" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/react-bootstrap4-modal</a></p>
            <p>모달 컴포넌트의 특징</p>
            <p>1. 화면 중앙에 노출하기 위한 CSS구조 또는 스크립트 연산 필요</p>
            <p>2. 공통된 디자인, 기능 존재</p>
            <p>3. 컨텐츠, 버튼등 모달별로 다른 구성 가능</p>
          </div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={this.toggleModal1}>
							닫기
						</button>
					</div>
				</Bs4Modal>

				<Bs4Modal visible={this.state.modal2State} onClickBackdrop={this.toggleModal2}
					dialogClassName="modal-dialog-scrollable modal-sm">
					<div className="modal-header">
						<h5 className="modal-title">이전 모달과의 비교</h5>
						<button type="button" className="close" onClick={this.toggleModal2}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">

            <p>1. 모달 크기, 타이틀, 컨텐츠, 버튼 구성이 다름</p>
						<p>2. 닫기에 대한 기능은 동일함</p>
						<div className="mb-1">&nbsp;</div>
						<p>1. 모달안에 데이터 호출/저장등 비즈니스 로직이 들어갈수 있음</p>
						<p>2. 보통 모달을 오픈한 화면의 로직과 모달안의 비즈니스 로직은 별개로 동작하는 경우가 많다. 
							오픈한 화면에서는 모달 내 로직에 관여하지 않고 모달안의 처리 결과나 액션만 필요한 경우가 대부분이다.<br/>
							예) 모달 닫을때/닫았을때 이벤트, 모달에서 처리한 값 등</p>
						<p>3. 따라서 모달 팝업은 별도의 파일로 분리하는 것이 유지보수에 좋다. 아주 간단한 모달은 화면과 같이 둬도 괜찮다.</p>

					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary">
							저장
						</button>
						<button type="button" className="btn btn-primary" onClick={this.toggleModal2}>
							닫기
						</button>
					</div>
				</Bs4Modal>

				<Bs4Modal visible={this.state.modal3State} onClickBackdrop={this.toggleModal3}
					dialogClassName="modal-lg">
					<div className="modal-header">
						<h5 className="modal-title">Do it</h5>
						<button type="button" className="close" onClick={this.toggleModal3}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>개별 화면에서 모달 기능이 필요할때 쓰기 쉽게 모달 컴포넌트를 만들어보자</p>
						<p>1. 이 화면에 있는 각기 다른 세가지 모달을 모달 컴포넌트로 대체할것</p>
						<p>2. toggleModal1(), toggleModal2(), toggleModal3(), beforeClose(), closed() 함수는 화면에 존재하는 함수이다. 모달X</p>
					</div>
					<div className="modal-footer">
						<button onClick={this.beforeClose} type="button" className="btn btn-success">
							닫히기 전
						</button>
						<button onClick={this.closed} type="button" className="btn btn-info">
							닫힘
						</button>
						<button onClick={this.toggleModal3} type="button" className="btn btn-primary">
							닫기
						</button>
					</div>
				</Bs4Modal>

        <Modal visible={this.state.modal4State} title='ffff'>

            <div className="diallog-1">
              <p>npm install react-bootstrap4-modal</p>
              <p><a href="https://www.npmjs.com/package/react-bootstrap4-modal" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/react-bootstrap4-modal</a></p>
              <p>모달 컴포넌트의 특징</p>
              <p>1. 화면 중앙에 노출하기 위한 CSS구조 또는 스크립트 연산 필요</p>
              <p>2. 공통된 디자인, 기능 존재</p>
              <p>3. 컨텐츠, 버튼등 모달별로 다른 구성 가능</p>
            </div>

            <div className="diallog-2">
              <p>1. 모달 크기, 타이틀, 컨텐츠, 버튼 구성이 다름</p>
              <p>2. 닫기에 대한 기능은 동일함</p>
              <div className="mb-1">&nbsp;</div>
              <p>1. 모달안에 데이터 호출/저장등 비즈니스 로직이 들어갈수 있음</p>
              <p>2. 보통 모달을 오픈한 화면의 로직과 모달안의 비즈니스 로직은 별개로 동작하는 경우가 많다. 
                오픈한 화면에서는 모달 내 로직에 관여하지 않고 모달안의 처리 결과나 액션만 필요한 경우가 대부분이다.<br/>
                예) 모달 닫을때/닫았을때 이벤트, 모달에서 처리한 값 등</p>
              <p>3. 따라서 모달 팝업은 별도의 파일로 분리하는 것이 유지보수에 좋다. 아주 간단한 모달은 화면과 같이 둬도 괜찮다.</p>
            </div>
						<button onClick={this.toggleModal4} type="button" className="btn btn-primary">
							닫기
						</button>
        </Modal>

      </React.Fragment>
    );
  }
}

export default connect()(Inbox);