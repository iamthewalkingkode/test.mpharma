import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Loading, Product, ProductForm } from '../components';


afterEach(() => {
    cleanup();
});

const product = {
    "id": 5,
    "name": "Exforge 10mg",
    "prices": [
        {
            "id": 1,
            "price": 10.99,
            "date": "2019-01-01T17:16:32+00:00"
        },
        {
            "id": 2,
            "price": 9.2,
            "date": "2018-11-01T17:16:32+00:00"
        }
    ]
};


test('should render Loading component', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('getting ready...')).toBeInTheDocument();
});

test('should render Product component', () => {
    const { getByText } = render(<Product {...product} />);
    expect(getByText('Exforge 10mg')).toBeInTheDocument();
});


test('should render ProductForm component for creating product', () => {
    const { getByText } = render(<ProductForm product={{}} visible={true} />);
    expect(getByText('Add product')).toBeInTheDocument();
});

// test('should render ProductForm component for editing product', () => {
//     const { getByText } = render(<ProductForm product={product} visible={true} />);
//     expect(getByText('Edit product')).toBeInTheDocument();
// });