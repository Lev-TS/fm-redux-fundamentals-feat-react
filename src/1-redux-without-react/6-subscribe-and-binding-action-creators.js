// redux contians only five APIs,
// of which createStore contains 5 more
const {
	createStore,
	compose,
	applyMiddleware,
	bindActionCreators,
	combineReducers,
} = require('redux');

const initialState = { value: 0 };

// action type
const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

// action creator
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

// reducer (never mutate state)
const reducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return { ...state, value: state.value + 1 };
	}

	if (action.type === ADD) {
		return { ...state, value: state.value + action.payload };
	}

	return state;
};

// createStore: should take one reducer (and optional middleware)
const store = createStore(reducer);

// subscriber is a method on the store which takes a function and
// calles it everytime the state changes
const subscriber = () => console.log('[SUNSCRIBER]', store.getState());
store.subscribe(subscriber);

// dispatch is a method on the store, takes object which should
// have type property, but with action creators we are passing
// functions that return such objects
store.dispatch(add(5));
store.dispatch(increment());

// bindActionCreators is a method on the store, which binds action creaters
// so when you call them you don't need to pass it in the dispatch function
// anymore.
const actions = bindActionCreators({ increment, add }, store.dispatch);
actions.add(100);
actions.increment();

// getState us a method on the store, which returs the current state
console.log(store.getState());
