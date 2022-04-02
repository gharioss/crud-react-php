import axios from "axios";
import React, { Component } from "react";
import RecordsList from "./RecordsList";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/view.php").then((response) => {
      this.setState({ students: response.data });
      // console.log(this.state.students);
      // console.log(this.state.students[0][0].first_name);
    });
  }

  usersList = () => {
    return this.state.students.map(function (object, i) {
      // console.log(object);
      // console.log(i);
      return <RecordsList obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3 align="center">Users List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}
