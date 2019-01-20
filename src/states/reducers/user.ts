import { Action } from 'redux';

const initialState = {};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
