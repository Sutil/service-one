import { createStore } from 'redux';

const INITIAL_STATE = {
  textFilter: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        textFilter: action.filter,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
