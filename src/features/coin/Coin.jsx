import React from 'react';
import { useSelector } from 'react-redux';


const Coin = () => {

  const value = useSelector((state) => state. counter.count)
  return <div>
      <h2>Value</h2>
      <span>{value}</span>
  </div>;
};

export default Coin;
