import React from 'react';
import { connect } from 'react-redux';
import * as dataActions from './store/data/_dataActions';

import './App.scss';
import MainApp from './MainApp';

const App = props => {

  return (
    <React.Fragment>
      <MainApp {...props} />
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
