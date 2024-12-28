const initialState = {
  query: '',
};

export const queryReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_QUERY') {
    return { ...state, query: action.payload };
  } else {
    return state;
  }
};
