var React = require("react");
var markdown = require("markdown").markdown;

var MarkdownViever = React.createClass({
    renderMarkdown: function (markdownSource) {
        return {__html: markdown.toHTML(markdownSource)};
    },
    render: function () {
        return (
            <div dangerouslySetInnerHTML={this.renderMarkdown(this.props.source)}></div>
        )
    }
});

var MarkdownEditor = require("./MarkdownEditor.jsx");

var App = React.createClass({
    getInitialState: function () {
        return {
            source: "#hello"
        }
    },
    changeMarkdownSource: function (sourceText) {
        this.setState({source: sourceText});
    },
    render: function () {
        return (
            <div>
                <MarkdownEditor updateParent={this.changeMarkdownSource}/>
                <MarkdownViever source={this.state.source} />
            </div>
        )
    }
});

React.render(
    <App />, document.getElementById("container");
)
