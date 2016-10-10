import visibilityFilterActionTypes from '../actionTypes/visibilityFilterActionTypes';
import constants from '../helpers/constants';

const visibilityFilter = (state = constants.SHOW_ALL, action) => {
  switch (action.type) {
    case visibilityFilterActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
