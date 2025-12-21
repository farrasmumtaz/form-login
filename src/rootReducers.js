import { combineReducers } from "redux";

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;