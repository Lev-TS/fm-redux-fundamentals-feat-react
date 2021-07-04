const { createStore, compose } = require('redux');

const reducer = (state) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
	const monitorReducer = (state, action) => {
		const start = Date.now();
		const newState = reducer(state, action);
		const end = Date.now();
		const diff = end - start;
		console.log(diff);
		return newState;
	};

	return createStore(monitorReducer, initialState, enhancer);
};

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
	const logReducer = (state, action) => {
		console.log('[prevState]', state, action);
		// console.log(action)
		const newState = reducer(state, action);
		console.log('[newState', newState);

		return newState;
	};

	return createStore(logReducer, initialState, enhancer);
};

const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));

store.dispatch({ type: 'Hello' });
