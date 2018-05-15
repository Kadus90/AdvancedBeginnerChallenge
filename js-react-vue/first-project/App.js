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

    toggleFavorites(address){

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
        
    }
})
