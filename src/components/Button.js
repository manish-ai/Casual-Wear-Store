import styled from 'styled-components';


export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.rem;
	background: transparent;
	border: .05rem solid white;
	border-color: ${props => props.cart ? 'var(--orange)' : 'var(--lightBlue)'};
	color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--mainBlue)'};
	border-radius: .2rem;
	padding: .2rem .5rem;
	cursor: pointer;
	margin: .2rem .5rem .2rem 0;
	transition: all .5s ease-in-out;
	&:hover {
		background: var(--lightBlue);
		background: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
		color: var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;//


export const CartButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: .05rem solid white;
	border-color: ${props => props.cart ? 'var(--orange)' : 'var(--lightBlue)'};
	color:yellow !important;
	border-radius: .2rem;
	padding: .2rem .4rem .2rem .6rem;
	cursor: pointer;
	margin: .2rem .5rem .2rem 0;
	transition: all .5s ease-in-out;
	
	
	}
	&:focus {
		outline: none;
	}
`;//${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'}