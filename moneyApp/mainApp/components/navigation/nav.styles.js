import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../styles/core.styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    backgroundColor: theme.white,
    borderTopWidth: 1,
    borderTopColor: theme.grey,
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    paddingTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
