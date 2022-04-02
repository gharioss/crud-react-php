import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            React CRUD Example
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/insert"} className="nav-link">
                  Insert
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/view"} className="nav-link">
                  View
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
