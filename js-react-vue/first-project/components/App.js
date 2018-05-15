// First Web App with React based on Tutorialzine.com guide
// - Requiring React
var React = require('react');

// - Components
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

// - Application shell
var App = React.createclass({

    // - App level State control.
    getInitialState(){

        // - Extract the favorite locations from local storage

        var favorites = [];

        if(localStorage.favorites){
            favorites = JSON.parse(localStorage.favorites);
        }

        // - Setting the initial location

        return {
            favorites: favorites,
            currentAddress: 'Paris, France',
            mapCoordinates: {
                lat: 48.856614,
                lng: 2.3522219
            }
        };
    },

    // - Switch if a location is a favorite.

    toggleFavorite(address){

        if(this.isAddressInFavorites(address)){
            this.removeFromFavorites(address);
        }

        else{
            this.addToFavorites(address);
        }
    },

    // - Adds a location to favorites

    addToFavorites(address){

        // - Get current state of favorites

        var favorites = this.state.favorites;

        // - Push current address to favorites array.

        favorites.push({
            address: address,
            timestamp: Date.now()
        });

        // - Set state to update favorites

        this.setState({
            favorites: favorites
        });

        localStorage.favorites = JSON.stringify(favorites);

    },

    // - Removes a location from favorites.

    removeFromFavorites(address){

        // - Get current state of favorites

        var favorites = this.state.favorites;
        var index = -1;

        // - Loop through the favorites array.

        for(var i = 0; i < favorites.length; i++){

            if(favorites[i].address == address){
                index = i;
                break;
            }
        }

        // - If it is found, remove it from the favorites array

        if(index !== -1){
            favorites.splice(index, 1);

            this.setState({
                favorites: favorites
            });

            localStorage.favorites = JSON.stringify(favorites);
        }
    },

    // - This will determine if an address is in favorites.

    isAddressInFavorites(address){

        // - Get current state of favorites

        var favorites = this.state.favorites;

        for(var i = 0; i < favorites.length; i++){
            if(favorites.address == address){
                return true;
            }
        }

        return false;
    },

    // - Search for an address

    searchForAddress(address){

        var self = this;

        // - Using GMaps geocode functionality, which is built on the Google Maps API.

        GMaps.geocode({
            address: address,
            callback: function(result, status){

                if(status !== 'OK') return;

                var latlng = results[0].geometry.location;

                self.setState({
                    currentAddress: results[0].formatted_address,
                    mapCoordinates: {
                        lat: latlng.lat(),
                        lng: latlng.lng()
                    }
                });
            }
        });
    },

    // - Rendering the App.js file

    render(){

        return (
            // - JSX construction of the page.
                <div>
                <h1>Your Google Maps Locations</h1>

                <Search onSearch={this.searchForAddress} />

                <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />

                <CurrentLocation address={this.state.currentAddress}
            favorite={this.state.isAddressInFavorites(this.state.currentAddress)}
            onFavoriteToggle={this.toggleFavorite} />

                <LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress} onClick={this.searchForAddress} />

            </div>

        );
    }
});

module.exports = App;
