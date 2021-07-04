const { createStore, applyMiddleware } = require('redux');

const reducer = (state) => state;

const logMiddleware = (store) => (next) => (action) => {
	console.log('[prevState]', store.getState(), action);
	next(action);
	console.log('[newState]', store.getState(), action);
};

const monitorMiddleware = (store) => (next) => (action) => {
	const start = Date.now();
	next(action);
	const end = Date.now();
	console.log(end - start);
};

const store = createStore(
	reducer,
	applyMiddleware(logMiddleware, monitorMiddleware)
);

store.dispatch({ type: 'Hello' });
