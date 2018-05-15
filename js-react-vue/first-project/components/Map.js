// - This component wraps the GMaps plugin.

var React = require('react');

var Map = React.createClass({

    componentDidMount(){
        // - Only componentDidMount is called when the component is first added to the page.
        // - By calling this manually, we ensure that our map initialization code is run the first time.

        this.componentDidUpdate();
    },

    componentDidUpdate(){

        if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){

            // - The map has already been initialized at this address.
            // - By returning, we will ensure that there is no flickering.

            return;
        }

        this.lastLat = this.props.lat;
        this.lastLng = this.props.lng;

        var map = new GMaps({
            el: '#map',
            lat: this.props.lat,
            lng: this.props.lng
        });

        // - Adding a marker to the location being shown.

        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng
        });
    }

    render(){

        return(
                <div className = "map-holder">
                <p>Loading...</p>
                <div id = "map"></div>
                </div>
        );
    }


});

module.exports = Map;
