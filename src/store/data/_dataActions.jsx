import { SET_PRODUCTS } from '../_types';


export function setProducts(data) {
    return dispatch => {
        dispatch({
            type: SET_PRODUCTS, data,
        });
    }
};

export function createProduct(data) {
    return (dispatch, getState) => {
        var products = getState().data.products;
        var product = {
            id: Math.max(...products.map(p => { return p.id; })) + 1,
            name: data.name,
            prices: [
                {
                    id: 1,
                    price: +data.price,
                    date: new Date().toISOString(),
                }
            ]
        };
        products = products.concat(product);
        dispatch({
            type: SET_PRODUCTS, data: products,
        });
    }
};

export function updateProduct(data) {
    return (dispatch, getState) => {
        var products = getState().data.products;
        var i = products.indexOf(products.find(p => p.id === data.id));
        products[i] = {
            ...products[i],
            name: data.name,
        }
        if (data.price) {
            products[i] = {
                ...products[i],
                prices: [
                    {
                        id: Math.max(...products[i].prices.map(p => { return p.id; })) + 1,
                        price: +data.price,
                        date: new Date().toISOString(),
                    },
                    ...products[i].prices,
                ]
            }
        }
        dispatch({
            type: SET_PRODUCTS, data: products,
        });
    }
};

export function deleteProduct(id) {
    return (dispatch, getState) => {
        var products = getState().data.products;
        var i = products.indexOf(products.find(p => p.id === id));
        products[i] = {
            ...products[i],
            deleted: true,
        }
        dispatch({
            type: SET_PRODUCTS, data: products,
        });
    }
};