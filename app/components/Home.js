// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import TopNavigation from './TopNavigation';
import { LeftNavigation } from './LeftNavigation';
import { ApplicationPanelList } from './ApplicationPanelList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="wrapper">
          <TopNavigation />
          <LeftNavigation />
          <ApplicationPanelList />
        </div>
      </div>
    );
  }
}
