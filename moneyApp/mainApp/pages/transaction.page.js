import React, {Component} from 'react';
import TransactionComponent from '../components/transaction/Transaction.component';
import {getTransactions} from '../api/api.utils';
import {result} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TransactionPage extends Component {
  state = {};

  render() {
    const {getTransactions, transactions} = this.props;
    return (
      <TransactionComponent
        transactions={transactions}
        getTransactions={getTransactions}
      />
    );
  }
}

TransactionPage.propTypes = {
  transactions: PropTypes.object,
  getTransactions: PropTypes.func,
};

const mapStateToProps = state => ({
  transactions: result(state, 'transactions.values', {}),
});

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
