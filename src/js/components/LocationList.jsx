import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import LocationItem from './LocationItem';

const propTypes = {
    childs: PropTypes.array,
    locationMap: PropTypes.array.isRequired
};

class LocationList extends Component{

    render() {
        const childs = this.props.childs;

        //фильтруем по srt если больше 1 в массиве
        if(childs.length > 1 ){
            childs.sort((a, b) => (a.srt > b.srt) ? 1 : -1);
        }

        //Список локаций
        return(<Fragment>
            {childs.map((ch, index) => {
                if(!!ch){
                    const child = this.props.locationMap.find((location) => location.id == ch.id);
                    if(!!child){
                        return <LocationItem
                            key={"location_" + child.id}
                            {...child}
                            locations={this.props.locationMap}
                            index={index}
                        />
                    }
                }
            })}  
        </Fragment>);
    }
}

LocationList.propTypes = propTypes;

export default LocationList;