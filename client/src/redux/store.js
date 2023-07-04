import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  user: {},
  isAuthorized: false,
  post: [],
  like: 0
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        user: action.payload
      };

    case 'AUTHORIZATION': {
      return {
        isAuthorized: action.payload
      };
    }

    case 'UPDATE_USER':
      return {
        user: action.payload.user,
        post: action.payload.post
      };

    case 'like': {
      return {
        like: action.payload
      };
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  user: userReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
