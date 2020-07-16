import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, SearchResult } from "./layout/Header";
import HeaderAbout from "./layout/HeaderAbout";
import SideNav from "./layout/SideNav";
import HeaderHelp from "./layout/HeaderHelp";
import Dashboard from "./tools/Dashboard";
import About from "./tools/About";
import Help from "./tools/Help";
import store from "../store";
import { Provider } from "react-redux";

class App extends Component {
  state = {
    searchStr: "",
    searchFlag: false,
  };

  onChangeStr = (e) => {
    // console.log(e.target.value);
    this.setState({ searchStr: e.target.value.toLowerCase() });
    // console.log(this.state.searchStr);
    if (e.target.value == "") {
      this.setState({
        searchFlag: false,
      });
    } else {
      this.setState({
        searchFlag: true,
      });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      about: false,
      help: false,
    };
  }

  choice = (event) => {
    this.setState({
      id: event,
    });
    if (event == "about") {
      this.setState({
        home: false,
        about: true,
        help: false,
      });
    }
    if (event == "home") {
      this.setState({
        home: true,
        about: false,
        help: false,
      });
    }
    if (event == "help") {
      this.setState({
        home: false,
        about: false,
        help: true,
      });
    }
  };

  render() {
    // const { home, about, help } = this.state;
    const home = this.state.home;
    const about = this.state.about;
    const help = this.state.help;
    const searchFlag = this.state.searchFlag;
    return (
      <Provider store={store}>
        <Fragment>
          {home && (
            <Header choice={this.choice} onChangeStr={this.onChangeStr} />
          )}
          {about && <HeaderAbout choice={this.choice} />}
          {help && <HeaderHelp choice={this.choice} />}
          <SideNav />
          <div className="container">
            {home && searchFlag && (
              <SearchResult findStr={this.state.searchStr} />
            )}
          </div>
          <div className="container">
            <Fragment>
              {home && <Dashboard />}
              {about && <About />}
              {help && <Help />}
            </Fragment>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
