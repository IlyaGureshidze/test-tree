import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import IndexPageContainer from '../containers/IndexPageContainer';

const propTypes = {

};

class Root extends Component{
/*    componentDidMount() {
        if(!!this.props.need_fetch){
            this.props.requestDataIfNeeded({
                action: "get_data"
            });
        }
    }*/

    render() {
        return (
            <Fragment>
                <IndexPageContainer />
            </Fragment>
        );
    }
}

Root.propTypes = propTypes;
export default Root;
