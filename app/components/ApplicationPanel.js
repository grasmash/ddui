// @flow
import React, { Component } from 'react';

export class ApplicationPanel extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            Acme Inc.
          </div>
          <div className="panel-body">
            <p>Toolset: Acquia BLT, Acquia Dev Desktop, Acquia Pipelines</p>
          </div>
          <div className="panel-footer">
            <a href="http://blt.readthedocs.io/en/8.x/" target="_blank">View application</a>
          </div>
        </div>
      </div>
    );
  }
}
