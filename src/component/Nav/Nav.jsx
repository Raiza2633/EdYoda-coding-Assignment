import React, { useState } from "react";
import "./Nav.css";
import logo from "../../image/logo.png";
import Arrow from "../../image/Arrow";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <li>
            <img src={logo} />
          </li>
          <div>
            <ul className="nav-dropdown">
              <li>
                Courses <Arrow />
              </li>
              <li>
                Programs <Arrow />
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="nav-btn-container">
            <div>
              <AiOutlineSearch fontSize={24} />
            </div>
            <button className="login">
              <Link to="/login">Log in</Link>
            </button>
            <button className="join">
              <Link to="/join">JOIN NOW</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
