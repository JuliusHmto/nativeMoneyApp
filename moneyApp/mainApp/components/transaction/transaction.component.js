import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Transaction.styles';
import {
  categoryImage,
  priceFormat,
  groupArrayMain,
  groupCurrMonth,
  groupLastMonth,
} from '../../utils/common.utils';

class TransactionComponent extends Component {
  state = {
    toggle: 'all',
  };

  toggleAll() {
    this.setState({
      toggle: 'all',
    });
  }

  toggleCurr() {
    this.setState({
      toggle: 'curr',
    });
  }

  toggleLast() {
    this.setState({
      toggle: 'last',
    });
  }

  render() {
    const {transactions} = this.props;
    const groupedAll = groupArrayMain(transactions, 'month', 'day');
    const curr = groupCurrMonth(transactions);
    const last = groupLastMonth(transactions);
    const groupedCurr = groupArrayMain(curr, 'day');
    const groupedLast = groupArrayMain(last, 'day');
    const toggle = this.state.toggle;
    const groupedTrx = toggle == 'curr' ? groupedCurr : groupedLast;

    const allTrx = groupedAll.map(item => {
      return (
        <View key={item.month}>
          <Text style={styles.monthText}>{item.month}</Text>
          {item.month_group.map(itemDay => {
            return (
              <View key={itemDay.day}>
                <Text style={styles.dayText}>{itemDay.day}</Text>
                {itemDay.day_group.map(trx => {
                  return (
                    <View style={styles.trxCont} key={trx.day}>
                      <View style={styles.iconCont}>
                        <Image
                          source={categoryImage(trx.category)}
                          style={styles.icon}
                        />
                      </View>
                      <View style={styles.textCont}>
                        <Text
                          style={[
                            styles.priceText,
                            trx.type == 'IN'
                              ? styles.textGreen
                              : styles.textRed,
                          ]}>
                          Rp {priceFormat(trx.amount)}
                        </Text>
                        <Text style={styles.categoryText}>{trx.category}</Text>
                        <Text style={styles.noteText}>{trx.note}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      );
    });

    const filteredTrx = groupedTrx.map(item => {
      return (
        <View key={item.day}>
          <Text style={styles.dayText}>{item.day}</Text>
          {item.day_group.map(trx => {
            return (
              <View style={styles.trxCont} key={trx.day}>
                <View style={styles.iconCont}>
                  <Image
                    source={categoryImage(trx.category)}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text
                    style={[
                      styles.priceText,
                      trx.type == 'IN' ? styles.textGreen : styles.textRed,
                    ]}>
                    Rp {priceFormat(trx.amount)}
                  </Text>
                  <Text style={styles.categoryText}>{trx.category}</Text>
                  <Text style={styles.noteText}>{trx.note}</Text>
                </View>
              </View>
            );
          })}
        </View>
      );
    });

    return (
      <View style={styles.topContainer}>
        <View style={styles.navOptContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.navScrollOpt}
              onPress={this.toggleAll.bind(this)}>
              <Text style={styles.optionText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navScrollOpt}
              onPress={this.toggleCurr.bind(this)}>
              <Text style={styles.optionText}>This Month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navScrollOpt}
              onPress={this.toggleLast.bind(this)}>
              <Text style={styles.optionText}>Last Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navScrollOpt}>
              <Text style={styles.optionText}>Choose Month</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View style={styles.bottomContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              {toggle == 'all'
                ? allTrx
                : toggle == 'curr' || toggle == 'last'
                ? filteredTrx
                : null}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default TransactionComponent;
