import { Provider } from 'react-redux'

import { store } from './redux/store';
import Counter from './components/Counter';


const Application = () => {
	return (
		<Provider store={store}>
			<div className="Application">
				<Counter />
			</div>
		</Provider>
	);
};

export default Application;
