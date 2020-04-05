import React from 'react';

import { connect } from 'react-redux';
import { getSearchQuery } from '../redux/actions/productActions';

function Searchbar(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.getSearchQuery(e.target.value);
  };

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        name='query'
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  query: state.product.query,
});
export default connect(mapStateToProps, { getSearchQuery })(Searchbar);
