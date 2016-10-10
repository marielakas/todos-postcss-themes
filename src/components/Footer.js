import React from 'react';
import constants from '../helpers/constants';
import FilterLink from '../containers/FilterLink';
import footerStyles from '../themes/footer.css';

const Footer = () => (
  <div className={footerStyles.footer}>
    Show:{" "}
    <FilterLink filter='all'>All</FilterLink>
    {", "}
    <FilterLink filter='active'>Active</FilterLink>
    {", "}
    <FilterLink filter='completed'>Completed</FilterLink>
  </div>
);

export default Footer;
