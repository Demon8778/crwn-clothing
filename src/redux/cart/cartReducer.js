import CartActionTypes from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';
const initialState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case CartActionTypes.CLEAR_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
			};

		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};
		default:
			return state;
	}
};

export default cartReducer;
