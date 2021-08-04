import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './Nav.styles';
import {theme} from '../../styles/core.styles';
import {connect} from 'react-redux';
import HomePage from '../../pages/Home.page';
import TransactionPage from '../../pages/Transaction.page';
import CalculatorPage from '../../pages/Calculator.page';
import AccountPage from '../../pages/Account.page';
import {home, wallet, calculator, user, addIcon} from '../../../images/index';
import {getTransactions} from '../../api/api.utils';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.middleContainer} onPress={onPress}>
    <View>{children}</View>
  </TouchableOpacity>
);

class Nav extends Component {
  state = {};
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: {
            ...styles.container,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <Image
                  source={home}
                  style={{
                    tintColor: focused ? theme.green : theme.grey,
                    ...styles.icon,
                  }}
                />
                <Text
                  style={{
                    color: focused ? theme.green : theme.black,
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionPage}
          listeners={{
            tabPress: () => {
              this.props.getTransactions();
            },
          }}
          options={{
            tabBarIcon: props => (
              <View
                style={styles.iconContainer}
                onPress={props.getTransactions}>
                <Image
                  source={wallet}
                  style={{
                    tintColor: props.focused ? theme.green : theme.grey,
                    ...styles.icon,
                  }}
                />
                <Text
                  style={{
                    color: props.focused ? theme.green : theme.black,
                  }}>
                  Transactions
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add Transaction"
          component={TransactionPage}
          options={{
            tabBarIcon: () => (
              <Image
                source={addIcon}
                style={{
                  ...styles.middleIcon,
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={CalculatorPage}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <Image
                  source={calculator}
                  style={{
                    tintColor: focused ? theme.green : theme.grey,
                    ...styles.icon,
                  }}
                />
                <Text
                  style={{
                    color: focused ? theme.green : theme.black,
                  }}>
                  Calculator
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountPage}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <Image
                  source={user}
                  style={{
                    tintColor: focused ? theme.green : theme.grey,
                    ...styles.icon,
                  }}
                />
                <Text
                  style={{
                    color: focused ? theme.green : theme.black,
                  }}>
                  Account
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions()),
  };
};

export default connect(null, mapDispatchToProps)(Nav);
