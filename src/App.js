import React from 'react';
import CompA from './components/compA';
import Coin from './features/coin/Coin';


const App = () => {
  return <div>
    <h2>Redux Counter App</h2>
    <Coin />

    <CompA />
  </div>;
};

export default App;
