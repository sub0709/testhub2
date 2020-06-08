import React, { Component } from "react";
import { connect } from "react-redux";
import NameCard from '../../components/NameCard';
import AddModal from './AddModals';

class Contacts2 extends Component {
  constructor(props) {
		super(props);

		this.changeHandler = this.changeHandler.bind(this);
		this.toggleAddModal = this.toggleAddModal.bind(this);
		this.makeButton = this.makeButton.bind(this);

		const list = [
			{
				img : 'user-3',
				name : 'Freddie J. Plourde',
				job : '@Founder',
				email : 'websitename.com',
				hasAuth : true,
			},
			{
				img : 'user-4',
				name : 'Christopher Gallardo',
				job : '@Webdesigner',
				email : 'abcweb.com',
				hasAuth : false,
			},
			{
				img : 'user-5',
				name : 'Joseph M. Rohr',
				job : '@Webdesigner',
				email : 'mywebs.com',
				hasAuth : true,
			},
			{
				img : 'user-6',
				name : 'Mark K. Horne',
				job : '@Director',
				email : 'profileq.com',
				hasAuth : false,
			},
			{
				img : 'user-2',
				name : 'Marie E. Tate',
				job : '@Webdeveloper',
				email : 'website.com',
				hasAuth : true,
			},
		];

		this.state = {
			list : list,
			selectedStatus : '1',
			showAddModal : false,
		};
	}
	
	changeHandler(e) {

	}

	toggleAddModal(e) {
		if(e) {
			e.preventDefault();
			e.stopPropagation();
		}

		this.setState({
			showAddModal : !this.state.showAddModal
		});
	}

	makeButton(hasAuth) {
		if(hasAuth) {
			return (
				<button type="button" className="btn btn-primary btn-sm waves-effect waves-light">
           Message
        </button>
			);
		}

		return (
			<button type="button" className="btn btn-light btn-sm waves-effect">
				Follow
			</button>
		);
	}

	componentDidMount() {
	}

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#none">UBold</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#none">Apps</a>
                    </li>
                    <li className="breadcrumb-item active">Contacts</li>
                  </ol>
                </div>
                <h4 className="page-title">Contacts</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <div className="row">
                  <div className="col-lg-8">
                    <form className="form-inline">
                      <div className="form-group">
                        <label htmlFor="inputPassword2" className="sr-only">
                          Search
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Search..."
                        />
                      </div>
                      <div className="form-group mx-sm-3">
                        <label htmlFor="status-select" className="mr-2">
                          Sort By
                        </label>
                        <select value={this.state.selectedStatus} onChange={this.changeHandler} className="custom-select" id="status-select">
                          <option value="all">All</option>
                          <option value="1">Name</option>
                          <option value="2">Post</option>
                          <option value="3">Followers</option>
                          <option value="4">Followings</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-lg-right mt-3 mt-lg-0">
                      <button
                        type="button"
                        className="btn btn-success waves-effect waves-light mr-1"
                      >
                        <i className="mdi mdi-settings"></i>
                      </button>
                      <a
                        href="#none"
                        className="btn btn-danger waves-effect waves-light"
                        data-animation="fadein"
                        data-plugin="custommodal"
												data-overlaycolor="#38414a"
												onClick={this.toggleAddModal}
                      >
                        <i className="mdi mdi-plus-circle mr-1"></i> Add New
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
						{this.state.list.map(item => {
							return (
								<div key={item.name} className="col-lg-4">
									<NameCard
										imgurl={require(`../../assets/images/users/${item.img}.jpg`)}
										name={item.name}
										job={item.job}
										email={item.email}
									>
										{
											this.makeButton(item.hasAuth)
										}
									</NameCard>
								</div>
							);
						})}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="text-right">
                <ul className="pagination pagination-rounded justify-content-end">
                  <li className="page-item">
                    <a className="page-link" href="#none" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#none">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#none">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#none">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#none">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#none">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#none" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
				<AddModal 
					visible={this.state.showAddModal}
					onClickClose={this.toggleAddModal}
				/>
      </React.Fragment>
    );
  }
}

export default connect()(Contacts2);
