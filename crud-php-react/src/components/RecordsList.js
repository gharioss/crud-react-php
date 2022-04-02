import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecordsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  delete = () => {
    axios
      .get("http://localhost:8080/delete.php?id=" + this.props.obj.id_student)
      .then(this.setState({ redirect: true }));
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Link to="/view" />;
    }
    return (
      <tr key={this.props.i}>
        <td>{this.props.obj.first_name}</td>
        <td>{this.props.obj.last_name}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <Link
            to={"/edit/" + this.props.obj.id_student}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete.bind(this)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
