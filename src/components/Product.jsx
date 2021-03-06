import { Button, Modal } from 'antd';
import React from 'react';
import { DeleteOutlined, EditFilled } from '@ant-design/icons';


const Product = ({ id, name, prices, editProduct, deleteProduct }) => {
    var oldPrices = [];
    prices.forEach((price, p) => {
        if (p > 0) {
            oldPrices = oldPrices.concat(`¢${price.price}`);
        }
    });

    return (
        <React.Fragment>
            <div id="Product" data-test-id={`product-${id}`}>
                <div className="actions">
                    <Button type="text" icon={<EditFilled />} size="small" onClick={editProduct} /> &nbsp;
                    <Button type="text" icon={<DeleteOutlined />} size="small" onClick={() => {
                        Modal.confirm({
                            title: `Delete product`,
                            content: `Are you sure you wnat to delete ${name}?`,
                            okText: 'Yes, Delete',
                            onOk: () => {
                                deleteProduct();
                            }
                        });
                    }} />
                </div>
                <h1 className="price">¢{prices[0].price}</h1>
                <h3 className="name">{name}</h3>
                {oldPrices.length > 0 ? (
                    <div className="old-price">
                        {oldPrices.join(' - ')}
                    </div>
                ) : (
                    <div><span className="old-price">No previous prices</span></div>
                )}
            </div>
        </React.Fragment>
    );
}

export default Product;