import React from "react";
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
        Shop
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
           
          </span>
          
        </button>

        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/home">
                Home 
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/about">
               About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/contact">
               Contact
              </NavLink>
            </li>
           
          </ul>
          <ul className="navbar-nav mr-right">
          
          <NavLink className="nav-link" exact to="/">
              Đăng xuất
              </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
