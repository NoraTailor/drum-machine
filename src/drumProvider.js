import {
	createContext,
	useContext,
	useReducer,
} from 'react';

export const DrumContext = createContext();

export const DrumProvider = ({
	reducer,
	initialState,
	children,
}) => (
	<DrumContext.Provider
		value={useReducer(reducer, initialState)}>
		{children}
	</DrumContext.Provider>
);

export const useValue = () => useContext(DrumContext);
