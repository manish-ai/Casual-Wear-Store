import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { CartButtonContainer } from './Button';
export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-samll navbar-dark px-sm-5">
				
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5 text-center"></li>
					<Link to='/product' className="nav-link ">
					 <h2 > <span className="text-center"> Home</span></h2>
					</Link>
				</ul>
				<Link to="/cart" className="ml-auto cart ">
				
						<span className="mr-2">your cart{'  '}<i class="fas fa-shopping-cart"></i>
						</span>
						
					
				</Link>

				<Link to="/" className="cart "><span>Log Out{'  '}</span>
						
					
				</Link>
			</NavWrapper>
		)
	}
}

const NavWrapper = styled.nav `
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}

	.cart{
	color:white !important;
    text-transform: capitalize;
	font-size: 1.4rem;
	color: white;
	padding: .6rem .4rem .2rem 1rem;
	cursor: pointer;

	
	}
	.cart: hover{
		transition: all .5s ease-in-out;
	}
`;