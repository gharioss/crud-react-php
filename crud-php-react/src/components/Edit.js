import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const [datas, setData] = useState({
    first_name: "arjhj",
    last_name: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({ ...datas, [e.target.name]: e.target.value });
    console.log(datas);
  };
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/getById.php?id=" + id).then((res) => {
      setData(res.data);
    });
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    console.log(datas);

    axios
      .post("http://localhost:8080/update.php", datas)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <h3>Add New User</h3>
      <form onSubmit={updateData}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            value={datas.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            value={datas.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={datas.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update data"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
