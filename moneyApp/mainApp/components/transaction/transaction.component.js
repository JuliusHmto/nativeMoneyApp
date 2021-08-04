import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Transaction.styles';
import {isEmpty} from 'lodash';
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
import {
  categoryImage,
  priceFormat,
  groupByDayAndMonth,
  groupArrayMain,
} from '../../utils/common.utils';

class TransactionComponent extends Component {
  state = {};
  render() {
    const {transactions, getTransactions} = this.props;
    const grouped = groupArrayMain(transactions, 'month', 'day');
    console.log(grouped);
    return (
      <View style={styles.topContainer}>
        <View style={styles.navOptContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.navScrollOpt}
              onPress={getTransactions}>
              <Text style={styles.optionText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navScrollOpt}>
              <Text style={styles.optionText}>This Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navScrollOpt}>
              <Text style={styles.optionText}>Last Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navScrollOpt}>
              <Text style={styles.optionText}>Choose Month</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView>
            {!isEmpty(grouped) && !isEmpty(transactions)
              ? grouped.map(item => {
                  return (
                    <View key={item.month}>
                      <Text>{item.month}</Text>
                      {item.month_group.map(itemDay => {
                        return (
                          <View key={itemDay.day}>
                            <Text>{itemDay.day}</Text>
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
                                    <Text style={styles.categoryText}>
                                      {trx.trx_category}
                                    </Text>
                                    <Text style={styles.noteText}>
                                      {trx.note}
                                    </Text>
                                  </View>
                                </View>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default TransactionComponent;
