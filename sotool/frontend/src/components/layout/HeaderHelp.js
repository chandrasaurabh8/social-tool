import React, { Component } from "react";

export class HeaderHelp extends Component {
  render() {
    const about = "about";
    const home = "home";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Social Tools
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={this.props.choice.bind(this, home)}
              >
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                Help<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                onClick={this.props.choice.bind(this, about)}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderHelp;
