// - This component presents the address of the currently displayed location with a clickable star icon.

var React = require('react');
var createReactClass = require('create-react-class');

// - Create the logic for the CurrentLocation class.
var CurrentLocation = createReactClass({
    // - Give access to toggleFavorite
    toggleFavorite(){
        this.props.onFavoriteToggle(this.props.address);
    },

    // - Render this component.
    render(){
        // - Sets the default star to empty
        var starClassName = "glyphicon glyphicon-star-empty";

        // - Check if the address is a favorite. If so, fill the star.
        if(this.props.favorite){
            starClassName = "glyphicon glyphicon-star";
        }

        return (
                <div className = "col-xs-12 col-md-6 col-md-offset-3 current-location">
                <h4 id = "save-location">{this.props.address}</h4>
                <span className = {starClassName} onClick = {this.toggleFavorite} aria-hidden="true"></span>
                </div>
        );
    }
});

module.exports = CurrentLocation;
