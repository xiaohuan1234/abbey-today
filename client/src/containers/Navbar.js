import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src="" alt="Warbler Home" />
        </Link>
        <ul className="nav justify-content-end">
           <li className="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
           <li className="nav-item">
            <Link to="/signin">Log in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
