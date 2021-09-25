import React from 'react';
import ReactDOM from 'react-dom';

/* // 2-hooking-it-up-with-react
import './2-hooking-it-up-with-react/index.scss';
import Application from './2-hooking-it-up-with-react/Application';

ReactDOM.render(
	<React.StrictMode>
		<Application />
	</React.StrictMode>,
	document.getElementById('root')
); */

// 3 - 5
import { Theme } from '@twilio-paste/core/theme';
import { Provider } from 'react-redux';

import Application from './4-selectors-and-reselect/Application';
import { store } from './4-selectors-and-reselect/store/index';

import './4-selectors-and-reselect/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
  document.getElementById('root')
);