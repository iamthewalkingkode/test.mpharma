import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import MainApp from '../MainApp';


afterEach(() => {
    cleanup();
});


describe('<MainApp />', () => {

    // ::: loading state
    const initialState = {
        _data: { products: [] }
    };
    test('should render Loading component', () => {
        const { getByText } = render(
            <MainApp {...initialState} />
        );
        expect(getByText('getting ready...')).toBeInTheDocument();
    });

    // ::: products found and displayed
    // const productsState = {
    //     _data: {
    //         products: [
    //             {
    //                 "id": 5,
    //                 "name": "Exforge 10mg",
    //                 "prices": [
    //                     {
    //                         "id": 1,
    //                         "price": 10.99,
    //                         "date": "2019-01-01T17:16:32+00:00"
    //                     },
    //                     {
    //                         "id": 2,
    //                         "price": 9.2,
    //                         "date": "2018-11-01T17:16:32+00:00"
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // };
    // test('should render Product component', () => {
    //     render(<MainApp {...productsState} />);
    //     const productComponent = screen.getBytestId('product-5');
    //     expect(productComponent).toBeInTheDocument();
    //     // expect(getByText('getting readyy...')).toBeInTheDocument();
    // });

});