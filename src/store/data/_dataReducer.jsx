import { getStorageJson } from '../../helper';
import { SET_PRODUCTS } from '../_types';

const initialState = {
    products: getStorageJson('products'),
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.data,
            };
    }
};


export default dataReducer;