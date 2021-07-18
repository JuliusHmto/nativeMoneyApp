import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './home.styles';
import greenBox from '../../../images/greenBox.png';
import redBox from '../../../images/redBox.png';

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.topTextContainer}>
              <Text style={styles.nameText}>Hey Julius!</Text>
              <Text style={styles.subText}>You have</Text>
              <Text style={styles.moneyText}>Rp 5.000.000 ,-</Text>
              <Text style={styles.bottomText}>lying around</Text>
            </View>
          </View>

          <View style={styles.containerDivider} />
          <View style={styles.contDivide}>
            <View style={styles.bottomContainer}>
              <View style={styles.insideTopContainer}>
                <View style={styles.sideViewButtons}>
                  <TouchableOpacity style={styles.mainButton}>
                    <Text>Add Income</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mainButton}>
                    <Text>Add Expense</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.sideViewButtons}>
                  <TouchableOpacity style={styles.mainButton}>
                    <Text>Calculator</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mainButton}>
                    <Text>Monthly Report</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.insideMiddleContainer}>
                <Text style={styles.titleText}>Recent</Text>
                <View style={styles.inMidCont}>
                  <TouchableOpacity style={styles.recentCont}>
                    <Image source={greenBox} style={styles.recentImg} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.recentCont}>
                    <Image source={redBox} style={styles.recentImg} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.recentCont}>
                    <Image source={redBox} style={styles.recentImg} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.insideBottomContainer}>
                <Text style={styles.titleText}>This Month's Journey</Text>
                <View style={styles.pieChartCont}></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeComponent;
