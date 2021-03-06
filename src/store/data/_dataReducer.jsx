import { getStorageJson, setStorageJson } from '../../helper';
import { SET_PRODUCTS } from '../_types';

const initialState = {
    products: getStorageJson('products'),
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case SET_PRODUCTS:
            var data = action.data.map(d => {
                return {
                    ...d,
                    prices: d.prices.sort(function (a, b) {
                        return new Date(b.date) - new Date(a.date);
                    })
                }
            });
            data.sort(function (a, b) {
                return b.id - a.id;
            });
            setStorageJson('products', data);
            return {
                ...state,
                products: data,
            };
    }
};


export default dataReducer;