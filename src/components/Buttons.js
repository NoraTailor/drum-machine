import React from 'react';
import sounds from '../soundsData';
import Button from '../components/Button';
import styled from 'styled-components';

function Buttons() {
	return (
		<Wrapper>
			{sounds &&
				sounds.map((btn) => {
					const { id, letter, sound, keyCode, name } = btn;
					return (
						<Button
							key={id}
							letter={letter}
							sound={sound}
							name={name}
							keyCode={keyCode}></Button>
					);
				})}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 70%;
	height: 40%;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	column-gap: 0.5rem;
	row-gap: 0.5rem;
`;
export default Buttons;
