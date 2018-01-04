// @flow
import React, { Component } from 'react';
import {ApplicationPanel} from "./ApplicationPanel";

export class ApplicationPanelList extends Component {
  render() {
    return (
      <div id="page-wrapper">

        {/* Header Row */}
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Applications</h1>
          </div>
        </div>

        {/* @todo loop over rows */}
        <div className="row">
          {/* @todo print 3 apps per row */}
          <ApplicationPanel />
        </div>

      </div>
    );
  }
}
