// - This module will represent an individual favorite location.
// - The moment library will be used to determine the relative time since the location was added as a favorite.

var React = require('react');
var createReactClass = require('create-react-class');
var Moment = require('moment');

var LocationItem = createReactClass({

    handleClick(){
        this.props.onClick(this.props.address);
    },

    render(){

        var cn = "list-group-item";

        if(this.props.active){
            cn += " active-location";
        }

        return(
                <a className = {cn} onClick={this.handleClick}>
                {this.props.address}
                <span className = "createAt">{ moment(this.props.timestamp).fromNow() }</span>
                <span className = "glyphicon glyphicon-menu-right"></span>
        )
    }
});

module.exports = LocationItem;
