export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    // if there is no serialized state in the localStorage return undefined in order for the reducer to set the correct state
    if(serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    return undefined;
  }
}
