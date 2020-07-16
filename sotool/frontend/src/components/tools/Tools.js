import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTools } from "../../actions/tools";
import Header from "../../components/layout/Header";
import Dialog from "react-bootstrap-dialog";

export class Tools extends Component {
  static propTypes = {
    tools: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getTools();
  }

  dialogue = (head, description) => {
    console.log(head, description);
    // return <script>BootstrapDialog.alert("I want banana!")</script>;
  };

  render() {
    return (
      <Fragment>
        <h2>Tools</h2>
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
            {this.props.tools.map((tool) => (
              <tr key={tool.id}>
                <td>
                  <img src={tool.logo} alt="logo" />
                </td>
                <td
                  onClick={() => {
                    this.dialogue(tool.name, tool.description);
                  }}
                >
                  {tool.name}
                </td>
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
  }
}
//first tools is reducer and second tools is part of state
const mapStateToProps = (state) => ({
  tools: state.tools.tools,
});

export default connect(mapStateToProps, { getTools })(Tools);
