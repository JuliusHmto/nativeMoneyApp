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
  money,
  interestRate,
  trophy,
  present,
  handshake,
} from '../../images/index';
import {chain, groupBy, map, mapValues, omit} from 'lodash';

export function priceFormat(price) {
  const formatPrice = price
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return formatPrice;
}

export function categoryImage(category) {
  const fmtCat = category;
  const catImage =
    fmtCat == 'Salary'
      ? money
      : fmtCat == 'Interest Money'
      ? interestRate
      : fmtCat == 'Award'
      ? trophy
      : fmtCat == 'Gift'
      ? present
      : fmtCat == 'Sale'
      ? handshake
      : fmtCat == 'Food & Drinks'
      ? breakfast
      : fmtCat == 'Bills & Utilities'
      ? slip
      : fmtCat == 'Shopping'
      ? shoppingCart
      : fmtCat == 'Investment'
      ? investment
      : fmtCat == 'Health & Fitness'
      ? health
      : fmtCat == 'Transportation'
      ? car
      : fmtCat == 'Gift & Donations'
      ? charity
      : fmtCat == 'Family'
      ? house
      : fmtCat == 'Friends & Lover'
      ? chat
      : fmtCat == 'Education'
      ? openBook
      : fmtCat == 'Travel'
      ? landscape
      : file;

  return catImage;
}

export function getItemByKey(arr, key, value) {
  // here we look for existing group item in the result array
  return arr.reduce(function (prev, cur) {
    if (prev == null && cur[key] == value) {
      return cur;
    }
    return prev;
  }, null);
}

export function checkPropForGroup(prop, key) {
  // here we check which columns should stay in the group,
  // and which should go down to group items.
  return prop == key || prop == key.replace('_id', '_name');
}

export function cloneSuperItem(src, key) {
  // create super item by copying only group related fields
  var item = {};
  for (prop in src) {
    if (checkPropForGroup(prop, key)) {
      item[prop] = src[prop];
    }
  }
  item[key + '_group'] = [];
  return item;
}

export function cloneSubItem(src, key) {
  // create sub-item by copying all but group related fields
  var item = {};
  for (prop in src) {
    if (!checkPropForGroup(prop, key)) {
      item[prop] = src[prop];
    }
  }
  return item;
}

export function groupArray(arr, args, lvl) {
  var key = args[lvl];
  var result = [];
  arr.forEach(function (item, ind, a) {
    // find or create super item for group and then create sub item
    // and push it there
    var keyItem = getItemByKey(result, key, item[key]);
    if (!keyItem) {
      keyItem = cloneSuperItem(item, key);
      result.push(keyItem);
    }
    subItem = cloneSubItem(item, key);
    keyItem[key + '_group'].push(subItem);
  });
  if (args[lvl + 1]) {
    // recursively make grouping on lower level
    for (var i = 0; i < result.length; i++) {
      result[i][key + '_group'] = groupArray(
        result[i][key + '_group'],
        args,
        lvl + 1,
      );
    }
  }
  return result;
}

export function groupArrayMain(arr, keysArray) {
  const grouped = groupArray(arr, arguments, 1);
  return grouped;
}
