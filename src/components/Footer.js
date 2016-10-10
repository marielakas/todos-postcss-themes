import React from 'react';
import constants from '../helpers/constants';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <div>
    Show:{" "}
    <FilterLink filter={constants.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={constants.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={constants.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
