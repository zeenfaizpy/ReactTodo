var React = require('react')

var Item = React.createClass({
    render: function() {
        return (
            <li>{this.props.name}</li>
            )
    }
})

module.exports = Item