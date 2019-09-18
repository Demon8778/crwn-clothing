import { SHOP_DATA } from './data';
import { ShopActionTypes } from './shopActionTypes';

const initialState = {
	collections: SHOP_DATA
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			};
		default:
			return state;
	}
};

export default shopReducer;
