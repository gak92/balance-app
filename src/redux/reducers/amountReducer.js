import * as actions from '../actions/types';
const initialState = 0;

const amountReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.DEPOSIT:
      console.log(actions.DEPOSIT);
      return state + action.payload;
    case actions.WITHDRAW:
      console.log(actions.WITHDRAW);
      return state + action.payload;
    default:
      return state;
  }
};

export default amountReducer;