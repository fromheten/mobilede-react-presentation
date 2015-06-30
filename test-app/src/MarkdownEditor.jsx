var React = require("react");

var MarkdownEditor = React.createClass({
    updateParent: function (event) {
        this.props.updateParent(event.target.value);
    },
    render: function () {
        return (
            <div>
                <textarea onChange={this.updateParent} />
            </div>
        )
    }
});

module.exports = MarkdownEditor;
