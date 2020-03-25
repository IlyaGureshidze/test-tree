import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import ParentMap from './ParentMap';

const propTypes = {
    title: PropTypes.string,
    locations: PropTypes.array
};

class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            locations: props.locations
        };
    }

    componentDidMount(){
        this.props.requestLocationsIfNeeded({
            action: "get_data"
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.locations !== this.props.locations){
            this.setState(state => ({
                locations: this.props.locations
            }))
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.locations !== this.state.locations)
        {
            return true;
        }
        return true;
    }

    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="main_block">
                        <div className="block_head">{this.state.title}</div>
                        <ParentMap
                            locations={this.state.locations}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}


IndexPage.propTypes = propTypes;

export default IndexPage;