import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './mainApp/components/navigation/Nav';
import AddExpensePage from './mainApp/pages/AddExpense.page';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
    <AddExpensePage />
  );
};

export default App;
