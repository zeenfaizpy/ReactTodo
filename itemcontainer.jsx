var React = require('react')
var Item = require('./item')
var payload = require('./payload')

var Itemcontainer = React.createClass({
    render: function() {
        return (
            <ul>
                {payload.map(function(todo_item){
                    return <Item name={todo_item.name} />
                })}
            </ul>
            )
    }
})

module.exports = Itemcontainer