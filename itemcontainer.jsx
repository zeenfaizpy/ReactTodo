var React = require('react')
var Item = require('./item')

var Itemcontainer = React.createClass({
    
    render: function() {
        return (
            <ul>
                {this.props.items.map(function(todo_item){
                    return <Item name={todo_item.name} />
                })}
            </ul>
            )
    }
})

module.exports = Itemcontainer