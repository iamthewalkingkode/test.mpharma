import React from 'react';


const Product = ({ prices, name }) => {

    return (
        <React.Fragment>
            <div id="Product">
                <h1 className="price">¢{prices[0].price}</h1>
                <h3 className="name">{name}</h3>
            </div>
        </React.Fragment>
    );
}

export default Product;