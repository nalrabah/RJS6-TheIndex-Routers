import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
          <h4 className="menu-item">
            <Link to="/books">BOOKS</Link>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
