const {
	createStore,
	compose,
	applyMiddleware,
	bindActionCreators,
	combineReducers,
} = require('redux');

const initialState = {
	users: [
		{ id: 1, name: 'Steve' },
		{ id: 2, name: 'Eric' },
	],
	tasks: [
		{ title: 'File the TPS reports' },
		{ title: 'Order more energy drinks' },
	],
};

// action types
const ADD_USER = 'ADD_USER';
const ADD_TASK = 'ADD_TASK';

// action creators
const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

// nested reducers
const userReducer = (state = initialState.users, action) => {
	if (action.type === ADD_USER) return [...state, action.payload];
	return state;
};

const tasksReducer = (state = initialState.tasks, action) => {
	if (action.type === ADD_TASK) return [...state, action.payload];
	return state;
};

// root reducer
const rootReducer = combineReducers({
	users: userReducer,
	tasks: tasksReducer,
});

// store
const store = createStore(rootReducer);

const actions = bindActionCreators({ addTask, addUser }, store.dispatch);

actions.addTask({ title: 'also add user' });
actions.addUser({ id: 3, name: 'Levan' });

console.log(store.getState());
