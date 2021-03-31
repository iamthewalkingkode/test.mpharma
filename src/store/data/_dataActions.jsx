import { setStorageJson } from '../../helper';
import { SET_PRODUCTS } from '../_types';


export function setProducts(data) {
    return dispatch => {
        setStorageJson('products', data);
        dispatch({
            type: SET_PRODUCTS, data,
        });
    }
};