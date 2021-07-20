import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './AddExpense.styles';
import {
  breakfast,
  charity,
  chat,
  house,
  landscape,
  openBook,
  shoppingCart,
  car,
  health,
  investment,
  slip,
  file,
} from '../../../images/index';

class AddExpenseComponent extends Component {
  state = {};
  render() {
    return (
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.titleText}>Choose</Text>
          <Text style={styles.titleText}>Income Category</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.optionsLayout}>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={breakfast} style={styles.icon} />
                <Text style={styles.optionText}>Food & Drinks</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={slip} style={styles.icon} />
                <Text style={styles.optionText}>Bills & Utilities</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={shoppingCart} style={styles.icon} />
                <Text style={styles.optionText}>Shopping</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsLayout}>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={investment} style={styles.icon} />
                <Text style={styles.optionText}>Investment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={health} style={styles.icon} />
                <Text style={styles.optionText}>Health & Fitness</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={car} style={styles.icon} />
                <Text style={styles.optionText}>Transportation</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsLayout}>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={charity} style={styles.icon} />
                <Text style={styles.optionText}>Gift & Donations</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={house} style={styles.icon} />
                <Text style={styles.optionText}>Family</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={chat} style={styles.icon} />
                <Text style={styles.optionText}>Friends & Lover</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsLayout}>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={openBook} style={styles.icon} />
                <Text style={styles.optionText}>Education</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={landscape} style={styles.icon} />
                <Text style={styles.optionText}>Travel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={file} style={styles.icon} />
                <Text style={styles.optionText}>Other Expenses</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AddExpenseComponent;
