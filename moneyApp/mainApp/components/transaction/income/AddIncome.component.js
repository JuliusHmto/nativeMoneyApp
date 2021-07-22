import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './AddIncome.styles';
import {
  handshake,
  interestRate,
  present,
  trophy,
  file,
  money,
} from '../../../../images/index';

class AddIncomeComponent extends Component {
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
                <Image source={money} style={styles.icon} />
                <Text style={styles.optionText}>Salary</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={interestRate} style={styles.icon} />
                <Text style={styles.optionText}>Interest Money</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={trophy} style={styles.icon} />
                <Text style={styles.optionText}>Award</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsLayout}>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={present} style={styles.icon} />
                <Text style={styles.optionText}>Gift</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={handshake} style={styles.icon} />
                <Text style={styles.optionText}>Sale</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCont}>
              <View style={styles.insideOption}>
                <Image source={file} style={styles.icon} />
                <Text style={styles.optionText}>Other Income</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AddIncomeComponent;
