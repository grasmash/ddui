// @flow
import React, { Component } from 'react';
import {LeftNavItem} from "./LeftNavItem";

export class LeftNavigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <LeftNavItem/>
          </ul>
        </div>
      </nav>
    );
  }
}
