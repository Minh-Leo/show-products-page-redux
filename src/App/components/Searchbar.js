import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { getSearchQuery } from '../redux/actions/productActions';

function Searchbar(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.getSearchQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        name='query'
        onChange={handleChange}
        placeholder='Type albums name to search...'
      />
      <SearchIcon icon={faSearch} />
    </SearchContainer>
  );
}

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  query: state.product.query,
});
export default connect(mapStateToProps, { getSearchQuery })(Searchbar);

const SearchContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
const SearchIcon = styled(FontAwesomeIcon)`
  color: #18314f;
  margin-left: -25px;
`;
