import * as actions from './types';

const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actions.DEPOSIT,
      payload: amount
    })
  };
};

const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actions.WITHDRAW,
      payload: amount
    })
  };
};

export { depositMoney, withdrawMoney };