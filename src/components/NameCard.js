import React, { Component } from "react";

/**
 * Renders the preloader
 */
class NameCard extends Component {
  render() {
    return (
      <div className="text-center card-box">
        <div className="pt-2 pb-2">
          <img
            src={this.props.imgurl}
            className="rounded-circle img-thumbnail avatar-xl"
            alt="asdf"
          />

          <h4 className="mt-3">
            <a href="extras-profile.html" className="text-dark">
              {this.props.name}
            </a>
          </h4>
          <p className="text-muted">
            {this.props.job} <span> | </span>{" "}
            <span>
              {" "}
              <a href="#none" className="text-pink">
                {this.props.email}
              </a>{" "}
            </span>
          </p>

          {this.props.children}

          <div className="row mt-4">
            <div className="col-4">
              <div className="mt-3">
                <h4>$2563</h4>
                <p className="mb-0 text-muted text-truncate">Post</p>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <h4>$29.8k</h4>
                <p className="mb-0 text-muted text-truncate">Followers</p>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <h4>1125</h4>
                <p className="mb-0 text-muted text-truncate">Followings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameCard;
