import styled from 'styled-components';
import { useValue } from '../drumProvider';

const Display = () => {
	const [{ soundsName }] = useValue();
	return (
		<Wrapper>
			<h2>{soundsName}</h2>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border: 1px solid darkgray;
	margin-top: 2rem;
	padding: 0 1.6rem;
	background-color: lightgray;
	border-radius: 2px;
	width: 10rem;
	display: block;
	text-align: center;
`;

export default Display;
