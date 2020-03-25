import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  index: PropTypes.number,
  parentId: PropTypes.number,
  id: PropTypes.number.isRequired
};

import LocationList from "./LocationList";

class LocationItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            opened: true
        };

        this.onClick = this.onClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.opened !== this.state.opened){
            return true;
        }

        return false;
    }

    onClick(e){
        if(!!e.target){
            this.setState(state => ({
                opened: !this.state.opened
            }))
        }
    }

    render(){

        //выбираем посты по родителю
        const childs = [];
        this.props.locations.map(l => {
            if(l.parent_id == this.props.id){
                childs.push(l);
            }
        });

        return(
            <Fragment>
                <div className="location" id={this.props.id} >
                    <div className={`location__item ${(childs.length > 0) ? (`childs_exists`) : ''} `}
                         onClick={(childs.length > 0) ? ((e) => this.onClick(e)) : null }
                    >
                        <div className={`location__head ${(!!this.state.opened) ? `location_active` : `location_not_active`}`}>
                            <div className="location__head_item location__srt">SRT: {this.props.srt}</div><div className="location__head_item location__title">{this.props.title}</div>
                        </div>
                    </div>
                    <Fragment>
                        {(childs.length > 0) ?
                            (<div className={`location__children ${(!!this.state.opened) ? `opened_childs` : `closed_childs`}`} >
                            <LocationList
                                key={"loc_"+ this.props.id}
                                childs={(childs) ? childs : [] }
                                locationMap={this.props.locations}
                            />
                        </div>) : null }
                    </Fragment>
                </div>
            </Fragment>
        );
    }
}

LocationItem.propTypes = propTypes;

export default LocationItem;


{/*
<div className="location__body"></div>*/}
