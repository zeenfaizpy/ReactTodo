var React = require('react')

var Inputbox = React.createClass({
    handle_text: function() {
        
    },
    render: function() {
        return (
            <input type="text" onChange={this.handle_text} />
            )
    }
})

module.exports = Inputbox