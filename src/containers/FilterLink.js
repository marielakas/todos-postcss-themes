import React from 'react';
import { Link } from 'react-router';

//TODO: refactor using css module
const FilterLink = ({ filter, children }) => (
  <Link to={filter==='all' ? '': filter }
        activeStyle={{
          textDecoration: 'none',
          color: 'black'
        }}>
        {children}
  </Link>
);

export default FilterLink;
