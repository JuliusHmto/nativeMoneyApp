import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../styles/core.styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: height,
    width: width,
    backgroundColor: theme.white,
  },
  topTextContainer: {
    alignItems: 'flex-start',
    paddingTop: 50,
    alignSelf: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingTop: 50,
    alignSelf: 'center',
  },
  optionsLayout: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: theme.font36,
    fontWeight: theme.bold,
  },
  optionText: {
    fontSize: theme.font12,
    fontWeight: theme.medium,
    paddingTop: 10,
  },
  line: {
    top: 10,
    height: 3,
    width: 100,
    backgroundColor: theme.red,
  },
  icon: {
    width: 50,
    height: 50,
  },
  optionCont: {
    height: 100,
    width: 100,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: theme.white,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.lineBlack,
    shadowColor: theme.lineBlack,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    elevation: 5,
  },
});

export default styles;
