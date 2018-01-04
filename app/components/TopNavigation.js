import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as registarActions from '../actions/registrar';

class TopNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      registered_applications: {
        location: null
      }
    }
  }

  handleClick(event) {
    event.preventDefault();
    const registered_applications = this.state.registered_applications;
    registered_applications.location = event.target.text;
    this.setState({
      registered_applications
    });
    this.props.actions.createRegistar(this.state.registered_applications);
    console.log(event.target.text);
  }

  render() {
    let navStyle = {
      marginBottom: '0',
    };
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={navStyle}>
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">Drupal Dev UI</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="create-app">
              Create App <i className="fa fa-plus-square fa-fw"></i>
          </a>
          </li>
          <li className="dropdown">

            <a className="dropdown-toggle" onClick={this.handleClick} data-toggle="dropdown" href="#" id="register-app">
              Register the App <i className="fa fa-plus fa-fw"></i>
            </a>

          </li>
         </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    registered_applications: state.registered_applications
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registarActions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(TopNavigation);
