import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { DrumProvider } from './drumProvider';
import { reducer, initialState } from './reducer';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<React.StrictMode>
		<DrumProvider
			reducer={reducer}
			initialState={initialState}>
			<App />
		</DrumProvider>
	</React.StrictMode>
);
