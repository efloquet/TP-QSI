/** @jsx React.DOM */
var FeedList = React.createClass({
		render: function() {
			var createItem = function(itemText) {
				return <li>{itemText}</li>;
			};
			return <ul>{this.props.items.map(createItem)}</ul>;
		}
	});
var FeedApp = React.createClass({
	getInitialState: function() {
		return {items: [], auteur: '', message: ''};
	},
	onChangeAuteur: function(e) {
		this.setState({auteur: e.target.value});
	},
	onChangeMessage: function(e) {
		this.setState({message: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.auteur] + ' : ' + [this.state.message]);
		var nextText = '';
		this.setState({items: nextItems, message: nextText, auteur: nextText});
	},
	render: function() {
		return (
			<div>
				<h3>News Feed</h3>
				 <FeedList items={this.state.items} />
				 <form onSubmit={this.handleSubmit}>
					 Auteur : <input onChange={this.onChangeAuteur} value={this.state.auteur} /><br/>
					 Message : <input onChange={this.onChangeMessage} value={this.state.message} /><br/>
					 <button>{'Add #' + (this.state.items.length + 1)}</button>
				 </form>
			 </div>
		);
	}
});
React.renderComponent(<FeedApp />, example);

