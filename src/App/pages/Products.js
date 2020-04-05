import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';

class Products extends Component {
  constructor(props) {
    super(props);
    this.props.setProducts();
  }

  render() {
    const { products, loading } = this.props;

    let productsMarkup = !loading ? (
      products.map((product) => (
        <Card product={product} key={product.id}></Card>
      ))
    ) : (
      <h2>Loading...</h2>
    );

    return (
      <div>
        <Searchbar></Searchbar>
        <h1>products</h1>
        <div className='products-container'>{productsMarkup}</div>
      </div>
    );
  }
}

Products.propTypes = {
  setProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});
const mapDispatchToProps = (dispatch) => ({
  setProducts: () => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
