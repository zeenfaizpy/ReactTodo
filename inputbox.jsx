var React = require('react')

var Inputbox = React.createClass({
    // getInitialState: function() {
    //   return {userInput: ''};
    // },
    // clearAndFocusInput: function() {
    //   this.setState({userInput: ''});
    // },
    handleClick: function() {
        var value = this.refs.myTextInput.getDOMNode().value
        var obj = { 'name': value}
        this.props.onUpdate(obj)
        this.refs.myTextInput.getDOMNode().value = ''
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="ADD" onClick={this.handleClick} />
            </div>
            )
    }
})

module.exports = Inputbox