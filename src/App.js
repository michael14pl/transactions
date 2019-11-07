import React from 'react';
import './App.scss';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Converter from './components/Converter/Converter';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionSum from './components/TransactionSum/TransactionSum';
import TopTransaction from './components/TopTransaction/TopTransaction';


function App() {
  return (
    <div>
      <Converter />
      <div id="content">
        <div id="content-left">
          <AddTransaction />
          <TopTransaction />
        </div>
        <div id="content-right">
          <TransactionList />
          <TransactionSum />
        </div>
      </div>
    </div>
  );
}

export default App;
