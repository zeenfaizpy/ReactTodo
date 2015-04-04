var React = require('react')
var Inputbox = require('./inputbox')
var Itemcontainer = require('./itemcontainer')

var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <Inputbox />
                <Itemcontainer />
            </div>
            )
    }
})

module.exports = Hello