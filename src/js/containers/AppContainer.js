import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { requestLocationsIfNeeded } from '../actions/data/data_actions';

import Root from '../components/Root';

const RootContainer = (props) => <Root {...props} />;

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = {
    requestLocationsIfNeeded
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);