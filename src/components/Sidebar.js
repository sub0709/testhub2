import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import MetisMenu from "metismenujs/dist/metismenujs";

const SideNavContent = () => {
  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu" id="side-menu">
          <li className="menu-title">Navigation</li>

          <li>
            <Link
              to="/"
              className="waves-effect has-dropdown"
              aria-expanded="true"
            >
              <i className="fe-airplay"></i>
              <span className="badge badge-success badge-pill float-right">
                5
              </span>
              <span> Dashboards </span>
            </Link>
            <ul className="nav-second-level" aria-expanded="false">
              <li>
                <Link to="/dashboard" className="side-nav-link-ref">
                  Dashboard 1
                </Link>
              </li>
              <li>
                <Link to="/dashboard2" className="side-nav-link-ref">
                  Dashboard 2
                </Link>
              </li>
              <li>
                <Link to="/dashboard3" className="side-nav-link-ref">
                  Dashboard 3
                </Link>
              </li>
              <li>
                <Link to="/inboxboard" className="side-nav-link-ref">
                  Inbox Board
                </Link>
              </li>
              <li>
                <Link to="/kanbanboard" className="side-nav-link-ref">
                  Kanban Board
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/"
              className="waves-effect has-dropdown"
              aria-expanded="true"
            >
              <i className="fe-airplay"></i>
              <span className="badge badge-success badge-pill float-right">
                3
              </span>
              <span> 샘플 </span>
            </Link>
            <ul className="nav-second-level" aria-expanded="false">
              <li>
                <Link to="/inbox" className="side-nav-link-ref">
                  Inbox
                </Link>
              </li>
              <li>
                <Link to="/kanban" className="side-nav-link-ref">
                  Kanban board
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="side-nav-link-ref">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/modal" className="side-nav-link-ref">
                  Modal
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      <div className="clearfix"></div>
    </React.Fragment>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleOtherClick = this.handleOtherClick.bind(this);
    this.initMenu = this.initMenu.bind(this);
  }

  /**
   * Bind event
   */
  // componentWillMount = () => {
  //   // document.addEventListener("mousedown", this.handleOtherClick, false);
  // };

  /**
   *
   */
  // componentDidMount = () => {
  //   this.initMenu();
  // };

  /**
   * Component did update
   */
  componentDidUpdate = (prevProps) => {
    if (this.props.isCondensed !== prevProps.isCondensed) {
      if (prevProps.isCondensed) {
        document.body.classList.remove("sidebar-enable");
        document.body.classList.remove("enlarged");
      } else {
        document.body.classList.add("sidebar-enable");
        const isSmallScreen = window.innerWidth < 768;
        if (!isSmallScreen) {
          document.body.classList.add("enlarged");
        }
      }

      this.initMenu();
    }
  };

  /**
   * Bind event
   */
  // componentWillUnmount = () => {
  //   document.removeEventListener("mousedown", this.handleOtherClick, false);
  // };

  /**
   * Handle the click anywhere in doc
   */
  handleOtherClick = (e) => {
    if (this.menuNodeRef.contains(e.target)) return;
    // else hide the menubar
    document.body.classList.remove("sidebar-enable");
  };

  /**
   * Init the menu
   */
  initMenu = () => {
    // render menu
    new MetisMenu("#side-menu");
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (this.props.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("in");
        }
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("active");
          var childAnchor = parent3.querySelector(".has-dropdown");
          if (childAnchor) childAnchor.classList.add("active");
        }

        const parent4 = parent3.parentElement;
        if (parent4) parent4.classList.add("in");
        const parent5 = parent4.parentElement;
        if (parent5) parent5.classList.add("active");
      }
    }
  };

  render() {
    const isCondensed = this.props.isCondensed || false;

    return (
      <React.Fragment>
        <div
          className="left-side-menu"
          ref={(node) => (this.menuNodeRef = node)}
        >
          {!isCondensed && (
            <PerfectScrollbar>
              <SideNavContent />
            </PerfectScrollbar>
          )}
          {isCondensed && <SideNavContent />}
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Sidebar);
