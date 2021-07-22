import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Transaction.styles';

class TransactionComponent extends Component {
  state = {};
  render() {
    const {transactions, getTransactions} = this.props;
    console.log(transactions);
    // return transactions.map(trx => {
    //   return (
    //     <View key={trx.id} style={styles.topContainer}>
    //       <Text>{trx.trx_amt}</Text>
    //       <Text>{trx.trx_note}</Text>
    //     </View>
    //   );
    // });
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.optionCont} onPress={getTransactions}>
          <Text>Transaction page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TransactionComponent;
