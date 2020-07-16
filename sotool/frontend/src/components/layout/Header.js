import React, { Component, Fragment } from "react";
import axios from "axios";

class Header extends Component {
  // state = {
  //   searchStr: "",
  // };

  // onChangeStr = (e) => {
  //   console.log(this.state.searchStr);
  //   this.setState({ searchStr: e.target.value });
  // };
  render() {
    const help = "help";
    const about = "about";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
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
              <li className="nav-item active">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.props.choice.bind(this, help)}
                >
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.props.choice.bind(this, about)}
                >
                  About
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Live Search"
                aria-label="Search"
                onChange={this.props.onChangeStr}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

class SearchResult extends Component {
  state = {
    search: [],
  };

  componentDidMount() {
    axios
      .get("/api/tools/")
      .then((res) => this.setState({ search: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    let filteredSearch = this.state.search.filter((search) => {
      return search.name.toLowerCase().indexOf(this.props.findStr) != -1;
    });
    console.log(this.props.findStr);
    if (filteredSearch.length > 0) {
      return (
        <Fragment>
          <h3>Search Result...</h3>
          <br />
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Catagory</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredSearch.map((tool) => (
                <tr key={tool.id}>
                  <td>
                    <img src={tool.logo} alt="logo" />
                  </td>
                  <td>{tool.name}</td>
                  <td>{tool.description}</td>
                  <td>{tool.catagory}</td>
                  <td>
                    <a
                      className="btn btn-outline-success my-2 my-sm-0"
                      href={tool.url}
                      target="_blank"
                      role="button"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    } else {
      return <p className=" form-control btn">Sorry no result found...</p>;
    }
  }
}

export { Header, SearchResult };
