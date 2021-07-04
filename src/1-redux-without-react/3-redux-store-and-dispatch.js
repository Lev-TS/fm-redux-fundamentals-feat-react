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

const INCREMENT = 'INCREMENT';
const incrementAction = { type: INCREMENT };

const reducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return { state: state.value + 1 };
	}

	return state;
};

// it should take one reducer (and optional middleware)
const store = createStore(reducer);
