import { Button } from 'antd';
import React from 'react';
import { DeleteOutlined, EditFilled } from '@ant-design/icons';


const Product = ({ prices, name, editProduct }) => {

    return (
        <React.Fragment>
            <div id="Product">
                <div className="actions">
                    <Button icon={<EditFilled />} size="small" onClick={editProduct} /> &nbsp;
                    <Button icon={<DeleteOutlined />} size="small" />
                </div>
                <h1 className="price">¢{prices[0].price}</h1>
                <h3 className="name">{name}</h3>
            </div>
        </React.Fragment>
    );
}

export default Product;