import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useValue } from '../drumProvider';
import { DISPLAY_NAME } from '../reducer';

const Button = (props) => {
	const audio = useRef();
	// eslint-disable-next-line
	const [state, dispatch] = useValue();

	const handlePad = () => {
		audio.current.currentTime = 0;
		audio.current.play();
		dispatch({
			type: DISPLAY_NAME,
			soundName: props.name,
		});
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === props.keyCode) {
			audio.current.currentTime = 0;
			audio.current.play();
			dispatch({
				type: DISPLAY_NAME,
				soundName: props.name,
			});
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	return (
		<Wrapper className='pad-container' key={props.id}>
			<div className='drum-pad' onClick={handlePad}>
				<audio
					src={props.sound}
					id={props.letter}
					className='clip'
					ref={audio}></audio>
				{props.letter}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.drum-pad {
		padding: 1rem 1.5rem;
		box-shadow: 1px 1px 5px 1px black;
		border-radius: 6px;
		background-color: gainsboro;
		text-transform: uppercase;
		font-size: large;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
export default Button;
