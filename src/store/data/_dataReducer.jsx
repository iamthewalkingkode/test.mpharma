import { SET_SET_SETTINGS } from '../_types';

const initialState = {
    products: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case SET_SET_SETTINGS:
            return {
                ...state,
                [action.key]: action.value
            };
    }
};


export default dataReducer;