import React from 'react';
import { useDispatch } from 'react-redux';
import { depositMoney } from '../redux/actions';
import { withdrawMoney } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();

  const decreaseAmount = () => {
    dispatch(withdrawMoney(100));
  };

  const increaseAmount = () => {
    dispatch(depositMoney(100));
  };


  return (
    <div className='container'>
      <h2>Deposit/Withdraw Money</h2>
      <button className='btn btn-primary mx-2' onClick={decreaseAmount}>-</button>
      Update Balance
      <button className='btn btn-primary mx-2' onClick={increaseAmount}>+</button>
    </div>
  )
}

export default Home;