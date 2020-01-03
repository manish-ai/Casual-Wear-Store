import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

export default class Product extends Component {
	render() {
		const {
			id,
			title,
			img,
			price,
			inCart
		} = this.props.product;
		return (
			<ProductWrapper className="col-9 col-md-6 col-lg-3 col-sm-6 my-3 back">
				<div className="card">
				<ProductConsumer >
					{(value) => (
						<div className="img-container p-5" onClick={() => value.handleDetail(id)}>
							<Link to="/details">
								<img src={img} alt="product"  className="card-img-top  "/>
							</Link>
							<button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); }}>
							{inCart ? (<p className="text-capitalize mb-0" disabled>{" "} in Cart</p>) : (<i className="fas fa-cart-plus"></i>)}
							</button>
						</div>
					)}
				</ProductConsumer>
					{/* card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-center mb-0 ">
							<h5>{title}</h5>
						</p>
						<h5 className="text-blue font-italic mb-0">
							₹ {price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
			
		)
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		image: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
}

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all .7s linear;
		
		border-radius: .4rem .4rem 0 0 ;
	}
	.card-footer {
		background: #bccdcf;
		border-top: transparent;
		transition: all .7s linear;
		
		border-radius: 0 0 .4rem .4rem;
	}
	&:hover {
		.card {
			border: .09rem solid rgba(0,0,0,.2);
			box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
		}
		.card-footer {
			background:orange;
		}
	}
	.card-img-top {
		transition: all .7s ease;
	}
	.img-container {
		position: relative;
		overflow: hidden;
		width: auto;
		max-height: 250px;
		
	}
}
	&:hover .card-img-top {
	}
	.cart-btn {
		outline: none;
		position: absolute;
		bottom: 0;
		right: 0;
		padding: .2rem .4rem .4rem;
		background: black;
		border: none;
		color: var(--mainWhite);
		font-size: 1.4rem;
		border-radius: .3rem 0 0 0;
		
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 1);
	}
	.cart-btn:hover {
		color: grey;
		cursor: pointer;
	} 
	.back{
		background: blue;
	}
`;