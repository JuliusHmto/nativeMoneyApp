import React, {Component} from 'react';
import TransactionComponent from '../components/transaction/Transaction.component';
import {result} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TransactionPage extends Component {
  state = {};

  render() {
    const {transactions} = this.props;
    return <TransactionComponent transactions={transactions} />;
  }
}

TransactionPage.propTypes = {
  transactions: PropTypes.object,
};

const mapStateToProps = state => ({
  transactions: result(state, 'transactions.transactions', {}),
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
