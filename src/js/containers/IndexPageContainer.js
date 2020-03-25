import React from 'react';
import { connect } from 'react-redux';
import {
    requestLocationsIfNeeded
} from '../actions/data/data_actions';

import IndexPage from '../components/IndexPage';

const mapStateToProps = (state) => {
    return {
        title: "ТЕСТОВОЕ ЗАДАНИЕ",
        locations: state.locations_store.locations
    }
};

const mapDispatchToProps = {
    requestLocationsIfNeeded
};

const Index = (props) => <IndexPage {...props} />;

const IndexPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

export default IndexPageContainer;