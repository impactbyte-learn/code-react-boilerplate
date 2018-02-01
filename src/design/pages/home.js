import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {GetPosts} from '../../reducers/modules/jsonAPI';

class Home extends Component {
	componentDidMount(){
		this.props.GetPosts()
	}
	render (){
		const { products } = this.props
    console.log(products);
		return (
			<div>
				halo
			</div>
		)
	}
}
const mapStateToProps = (state) => ({products: state.jsonAPI});
export default withRouter(connect(mapStateToProps, {GetPosts})(Home));
