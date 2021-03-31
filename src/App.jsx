import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as dataActions from './store/data/_dataActions';

import { get } from './helper';
import { Loading } from './components';

import './App.scss';

const App = props => {

  // const { _data: { products } } = props;

  const [products, setProducts] = useState(props._data.products);
  const [loading, setLoading] = useState(false);


  // first load
  useEffect(() => {
    // Check if there are any products in redux. If not fetch from mock
    if (products.length === 0) {
      setLoading(true);
      get('http://www.mocky.io/v2/5c3e15e63500006e003e9795').then(res => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setProducts(res.products);
        props.setProducts(res.products);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <Loading />
      )}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
