import React from 'react';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Converter from './components/Converter/Converter';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionSum from './components/TransactionSum/TransactionSum';
import TopTransaction from './components/TopTransaction/TopTransaction';
import TrasactionsContextProvider from './contexts/TransactionsContext';
import ConverterContextProvider from './contexts/ConverterContext';
import './App.scss';


function App() {
  return (
    <TrasactionsContextProvider>
      <ConverterContextProvider>
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
      </ConverterContextProvider>
    </TrasactionsContextProvider>
  );
}

export default App;