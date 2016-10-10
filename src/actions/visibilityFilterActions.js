import visibilityFilterActionTypes from '../actionTypes/visibilityFilterActionTypes';

export const setVisibilityFilter = (filter) => {
  return {
    type: visibilityFilterActionTypes.SET_VISIBILITY_FILTER,
    filter,
  };
};
