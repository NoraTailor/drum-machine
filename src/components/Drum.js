import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

import Display from './Display';

function Drum() {
	return (
		<Wrapper id='drum-machine'>
			<div id='display'>
				<Buttons />
				<Display />
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: gray;
	height: 100vh;

	#display {
		margin-top: 2rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 80%;
		height: 60%;
		border: 2px solid orange;
		background-color: rgb(187, 178, 178);
		display: flex;
		justify-content: center;
	}

	@media screen and (min-width: 768px) {
		#display {
			width: 20%;
		}
	}
`;

export default Drum;
