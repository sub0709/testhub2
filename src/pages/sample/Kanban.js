import React, { Component } from "react";
import { connect } from "react-redux";

class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                    <li className="breadcrumb-item active">Kanban Board</li>
                  </ol>
                </div>
                <h4 className="page-title">Kanban Board</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card-box">
                <div className="dropdown float-right">
                  <a
                    href="#none"
                    className="dropdown-toggle arrow-none"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#none">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#none">
                      Delete
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Members
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Due Date
                    </a>
                  </div>
                </div>

                <h4 className="header-title">Upcoming</h4>
                <p className="sub-header">
                  Your awesome text goes here. Your awesome text goes here.
                </p>

                <ul className="sortable-list taskList list-unstyled" id="upcoming">
                  <li id="task1">
                    <span className="badge bg-soft-danger text-danger float-right">
                      High
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        iOS App home page
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 16, 2018
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
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-3.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="task2">
                    <span className="badge bg-soft-success text-success float-right">
                      Low
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Topnav layout design
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>Many desktop publishing packages and web page.</p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Nov 22, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-2.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="task3">
                    <span className="badge bg-soft-danger text-danger float-right">
                      High
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Invite user to a project
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>If you are going to use a passage of Lorem Ipsum.</p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 15, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-5.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="task-info" id="task4">
                    <span className="badge bg-soft-warning text-warning float-right">
                      Medium
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Write a release note
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Dec 03, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-6.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-7.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="#none"
                  className="btn btn-primary btn-block mt-3 waves-effect waves-light"
                >
                  <i className="mdi mdi-plus-circle"></i> Add New
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-box">
                <div className="dropdown float-right">
                  <a
                    href="#none"
                    className="dropdown-toggle arrow-none"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#none">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#none">
                      Delete
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Members
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Due Date
                    </a>
                  </div>
                </div>

                <h4 className="header-title">In Progress</h4>
                <p className="sub-header">Your awesome text goes here.</p>

                <ul
                  className="sortable-list taskList list-unstyled"
                  id="inprogress"
                >
                  <li id="task6">
                    <span className="badge bg-soft-warning text-warning float-right">
                      Medium
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Enable analytics tracking
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      It has roots in a piece of classical Latin literature from
                      45 BC.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Sep 18, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-8.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="task-info" id="task7">
                    <span className="badge bg-soft-danger text-danger float-right">
                      High
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Kanban board design
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 30, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-9.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-10.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="task-danger" id="task8">
                    <span className="badge bg-soft-success text-success float-right">
                      Low
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Code HTML email template
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Nov 23, 2018
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
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-3.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="#none"
                  className="btn btn-primary btn-block mt-3 waves-effect waves-light"
                >
                  <i className="mdi mdi-plus-circle"></i> Add New
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-box">
                <div className="dropdown float-right">
                  <a
                    href="#none"
                    className="dropdown-toggle arrow-none"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#none">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#none">
                      Delete
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Members
                    </a>
                    <a className="dropdown-item" href="#none">
                      Add Due Date
                    </a>
                  </div>
                </div>

                <h4 className="header-title">Completed</h4>
                <p className="sub-header">
                  Your awesome text goes here. Your awesome text goes here.
                </p>

                <ul className="sortable-list taskList list-unstyled" id="completed">
                  <li className="task-warning" id="task10">
                    <span className="badge bg-soft-success text-success float-right">
                      Low
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Brand logo design
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Jun 13, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-3.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="task-success" id="task11">
                    <span className="badge bg-soft-warning text-warning float-right">
                      Medium
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Improve animation loader
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      A handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 16, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-4.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-7.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="task12">
                    <span className="badge bg-soft-danger text-danger float-right">
                      High
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        Dashboard Re-design
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 16, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-5.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-9.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="task-info" id="task13">
                    <span className="badge bg-soft-success text-success float-right">
                      Low
                    </span>
                    <h5 className="mt-0">
                      <a href="#none" className="text-dark">
                        iOS App home page
                      </a>
                    </h5>
                    <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                      <input type="checkbox" />
                      <label></label>
                    </div>
                    <p>
                      you need to be sure there isn't anything embarrassing
                      hidden in the middle of text.
                    </p>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col">
                        <p className="font-13 mt-2 mb-0">
                          <i className="mdi mdi-calendar"></i> Oct 16, 2018
                        </p>
                      </div>
                      <div className="col-auto">
                        <div className="text-right">
                          <a href="#none" className="text-muted">
                            <img
                              src="assets/images/users/user-10.jpg"
                              alt="task-user"
                              className="avatar-sm img-thumbnail rounded-circle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="#none"
                  className="btn btn-primary btn-block mt-3 waves-effect waves-light"
                >
                  <i className="mdi mdi-plus-circle"></i> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Kanban);
