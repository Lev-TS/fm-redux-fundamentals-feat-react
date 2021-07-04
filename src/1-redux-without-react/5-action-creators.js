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
const increment = () => ({ type: INCREMENT })
const add = (amount) => ({ type: ADD, payload: amount })

// reducer (never mutate state)
const reducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return { ...state, value: state.value + 1 };
	}

	if (action.type === ADD) {
		return { ...state, value: state.value + action.payload}
	}

	return state;
};

// store: should take one reducer (and optional middleware)
const store = createStore(reducer);

// dispatch action, takes object which should have type property,
// but with action creators we are passing functions that return 
// such objects
store.dispatch(add(5))
store.dispatch(increment())

// get state
console.log(store.getState())