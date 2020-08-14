import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from "../components/Login";
import { logInAction } from "../actions/authActions";

class LoginContainer extends Component {

    loginSubmit = data => {
        this.props.dispatch(logInAction(data, this.props.history));
    };

    render() {
        return <Login onLogin={this.loginSubmit} />;
    }
}

// Define PropTypes
LoginContainer.propTypes = {
// Define your PropTypes here
};

// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = state => ({
    ...state
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(LoginContainer);
