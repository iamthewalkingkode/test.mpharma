import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as dataActions from './store/data/_dataActions';

import { get } from './helper';
import { Button, Col, message, Row } from 'antd';
import { Loading, Product, ProductForm } from './components';

import './App.scss';

const App = props => {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);


  // first load
  useEffect(() => {
    // Check if there are any products in redux. If not fetch from mock
    if (props._data.products.length === 0) {
      setLoading(true);
      get('https://www.mocky.io/v2/5c3e15e63500006e003e9795').then(res => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setProducts(res.products);
        props.setProducts(res.products);
      });
    } else {
      setProducts(props._data.products);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props._data.products]);

  return (
    <React.Fragment>
      {loading && (
        <Loading />
      )}

      {!loading && (
        <div>
          <div className="toolbar">
            <div className="float-left">
              <img src="logo.svg" alt="mPharma logo" />
            </div>
            <div className="float-right">
              <Button type="primary" size="large" onClick={() => setShowForm(true)}>+ Add new item</Button>
            </div>
            <div className="clearfix"></div>
          </div>

          <div style={{ padding: 50 }}>
            <Row gutter={50}>
              {products.map(product => (
                !product.deleted && <Col key={product.id} span={6} className="text-center">
                  <Product
                    {...props}
                    {...product}
                    editProduct={() => {
                      setProduct(product);
                      setShowForm(true);
                    }}
                    deleteProduct={() => {
                      props.deleteProduct(product.id);
                      message.success(`${product.name} has been deleted`);
                    }}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}

      <ProductForm
        {...props}
        visible={showForm}
        product={product}
        onCancel={() => {
          setProduct({});
          setShowForm(false);
        }}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  _data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (data) => {
    dispatch(dataActions.setProducts(data));
  },
  createProduct: (data) => {
    dispatch(dataActions.createProduct(data));
  },
  updateProduct: (data) => {
    dispatch(dataActions.updateProduct(data));
  },
  deleteProduct: (id) => {
    dispatch(dataActions.deleteProduct(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
