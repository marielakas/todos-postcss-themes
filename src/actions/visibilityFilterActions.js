import visibilityFilterActionTypes from '../actionTypes/visibilityFilterActionTypes';

export const setVisibilityFilter = (filter) => ({
  type: visibilityFilterActionTypes.SET_VISIBILITY_FILTER,
  filter
});
