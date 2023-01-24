export const initialState = {
	soundsName: 'cv q',
};

export const DISPLAY_NAME = 'DISPLAY_NAME';

export const reducer = (state, action) => {
	if (action.type === DISPLAY_NAME) {
		return { ...state, soundsName: action.soundName };
	}
	return state;
};
