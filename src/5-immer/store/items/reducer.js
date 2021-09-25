import produce from 'immer';
import {
	ITEM_ADDED,
	ITEM_PRICE_UPDATED,
	ITEM_QUANTITY_UPDATED,
	ITEM_REMOVED,
} from './action';

let id = 1;

export const initialItems = [
	{ uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
	{ uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 },
];

// // using produce (immer) enables us to mutate the state directly
// export const reducer = (state = initialItems, action) => {
// 	if (action.type === ITEM_ADDED) {
// 		return produce(state, (draftState) => {
// 			const item = { uuid: id++, quantity: 1, ...action.payload };
// 			draftState.push(item);
// 		});
// 	}

// 	if (action.type === ITEM_REMOVED) {
// 		const newState = [];
// 		state.forEach((item) =>
// 			item.uuid !== action.payload.uuid ? newState.push(item) : null
// 		);
// 		return newState;
// 	}

// 	if (action.type === ITEM_PRICE_UPDATED) {
// 		return produce(state, (draftState) => {
// 			const item = draftState.find((item) => item.uuid === action.payload.uuid);
// 			item.price = parseInt(action.payload.price, 10);
// 		});
// 	}

// 	if (action.type === ITEM_QUANTITY_UPDATED) {
// 		return produce(state, (draftState) => {
// 			const item = draftState.find((item) => item.uuid === action.payload.uuid);
// 			item.quantity = parseInt(action.payload.quantity, 10);
// 		});
// 	}

// 	return state;
// };

// instead of using immer with individual cases in the reducer we can wrap
// the whole reduced with the produce, it reduced the code and now we can 
// mutate the state.
export const reducer = produce((state = initialItems, action) => {
	if (action.type === ITEM_ADDED) {
		const item = { uuid: id++, quantity: 1, ...action.payload };
		state.push(item);
	}

	if (action.type === ITEM_REMOVED) {
		return state.filter((item) => item.uuid !== action.payload.uuid);
	}

	if (action.type === ITEM_PRICE_UPDATED) {
		const item = state.find((item) => item.uuid === action.payload.uuid);
		item.price = parseInt(action.payload.price, 10);
	}

	if (action.type === ITEM_QUANTITY_UPDATED) {
		const item = state.find((item) => item.uuid === action.payload.uuid);
		item.quantity = parseInt(action.payload.quantity, 10);
	}
}, initialItems);

export default reducer;
