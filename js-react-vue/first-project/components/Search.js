// - This module controls the logic for searching.

var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

var Search = createReactClass({

    getInitialState(){
        return {value: ''};
    },

    handleChange(event){
        this.setState({value: event.target.value});
    },

    handleSubmit(event){

        event.preventDefault();

        // - When the form is submitted, call the onSearch callback that is passed to the component.

        this.props.onSearch(this.state.value);

        // - Unfocus the text input field.

        ReactDom.findDOMNode(this).querySelector('input').blur();
    },

    render(){

        return (
                <form id = "geocoding_form" className = "form-horizontal" onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                <div className = "col-xs-12 col-md-6 col-md-offset-3">
                <div className = "input-group">
                <input type = "text" className = "form-control" id = "address" placeholder = "Find a location..."
            value = {this.state.value} onChange = {this.handleChange} />
                <span className = "input-group-btn">
                <span className = "glyphicon glyphicon-search" aria-hidden = "true"></span>
                </span>
                </div>
            </div>
                </div>
                </form>
        );
    }
});

module.exports = Search;
