import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LocationItem from './LocationItem';

const propTypes = {
    locations: PropTypes.array.isRequired,
};

const ParentMap = (props) => {
    return(
        <Fragment>
            <div className={"map_body"}>
                {props.locations.map((location, index) => {
                    if (location.parent_id === null) {
                        return <LocationItem
                            key={"location_" + location.id}
                            {...location}
                            locations={props.locations}
                            index={index}
                        />;
                    }
                })}
            </div>
        </Fragment>);
};

ParentMap.propTypes = propTypes;
export default ParentMap;  