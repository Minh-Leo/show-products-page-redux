import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';

class Products extends Component {
  constructor(props) {
    super(props);
    this.props.setProducts();
  }

  render() {
    const { products, query, loading } = this.props;

    let filteredProducts = query
      ? products.filter((product) => {
          let nameQuery = query.toLowerCase();
          return product.name.toLowerCase().includes(nameQuery);
        })
      : products;

    let productsMarkup = !loading ? (
      filteredProducts.map((product) => (
        <Card product={product} key={product.id}></Card>
      ))
    ) : (
      <SpinnerIcon icon={faSpinner} />
    );

    return (
      <ProductsPage>
        <Searchbar></Searchbar>
        <ProductsContainer>{productsMarkup}</ProductsContainer>
      </ProductsPage>
    );
  }
}

Products.propTypes = {
  setProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  query: state.product.query,
  loading: state.product.loading,
});
const mapDispatchToProps = (dispatch) => ({
  setProducts: () => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);

const ProductsContainer = styled.div`
  max-width: 90vw;
  display: grid;
  margin: 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  align-items: center;
  justify-content: center;
`;
const ProductsPage = styled.div`
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SpinnerIcon = styled(FontAwesomeIcon)`
  color: #18314f;
  font-size: 32px;
  margin: 40px auto;
  animation: rotate 1.2s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
