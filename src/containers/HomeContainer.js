import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from "../components/Home";

class HomeContainer extends Component {

    componentDidMount() {
    }

    render() {
        return <Home />;
    }
}

// Define PropTypes
HomeContainer.propTypes = {
// Define your PropTypes here
};

// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = state => ({
    ...state
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(HomeContainer);
