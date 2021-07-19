import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../styles/core.styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: theme.white,
    elevation: 0,
    width: width,
    height: 60,
    shadowColor: theme.grey,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  middleIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowColor: theme.grey,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default styles;
