import React from 'react'
import {connect} from 'react-redux'

const mapStateProps = (props, {params: {deckID}}) => {
	deckID
}
const App = ({ deckID, cildren}) => 
	<div className = "app">
	<div></div>
	</div>

export default connect (mapStateToProps)(App);