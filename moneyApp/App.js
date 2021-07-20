import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './mainApp/components/navigation/Nav';
import AddIncomeComponent from './mainApp/components/transaction/AddIncome.component';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
    <AddIncomeComponent />
  );
};

export default App;
