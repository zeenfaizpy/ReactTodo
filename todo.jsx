var React = require('react')
var Inputbox = require('./inputbox')
var Itemcontainer = require('./itemcontainer')
var payload = require('./payload')

var Todo = React.createClass({
    getInitialState: function() {
        return payload
    },
    onUpdate: function(obj){
        this.setState({items: this.state.items.concat([obj])});
    },
    render: function() {
        return (
            <div>
                <Inputbox onUpdate={this.onUpdate} />
                <Itemcontainer items={this.state.items} />
            </div>
            )
    }
})

module.exports = Todo