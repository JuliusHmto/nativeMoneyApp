import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav from './mainApp/components/navigation/Nav';
import TransactionPage from './mainApp/pages/Transaction.page';

const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default App;
