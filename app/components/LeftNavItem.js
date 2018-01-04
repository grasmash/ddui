// @flow
import React, { Component } from 'react';

export class LeftNavItem extends Component {
  render() {
    return (
      <li>
        <a href="#"><i className="fa fa-dashboard fa-fw"></i> Applications<span className="fa arrow"></span></a>
        <ul className="nav nav-second-level">
          <li>
            <a href="#">Acme Inc. <span className="fa arrow"></span></a>
            <ul className="nav nav-third-level">
              <li>
                <a href="#">Acquia BLT</a>
              </li>
              <li>
                <a href="#">Acquia Dev Desktop</a>
              </li>
              <li>
                <a href="#">Acquia Pipelines</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
