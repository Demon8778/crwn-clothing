import { UserActionTypes } from './userActionTypes';

const initialState = {
	currentUser: null,
	error: null
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
				error: null
			};

		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				error: payload
			};

		default:
			return state;
	}
};

export default userReducer;
