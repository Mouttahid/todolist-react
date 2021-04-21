import React from "react";
import { NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/">
          Todo List 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/p2">
          Link
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/p3">
          Link
        </NavLink>
      </li>
    
    </ul>

 
  );
}
