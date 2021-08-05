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
    height: height,
  },
  topContainer: {
    height: height,
    width: width,
    backgroundColor: theme.white,
  },
  navOptContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  topTextContainer: {
    alignItems: 'flex-start',
    paddingTop: 50,
    alignSelf: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingTop: 20,
    alignSelf: 'center',
    paddingBottom: 100, //for extra bottom height
  },
  navScrollOpt: {
    backgroundColor: theme.mediumGrey,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
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
    fontSize: theme.font14,
    fontWeight: theme.bold,
  },
  line: {
    top: 10,
    height: 3,
    width: 100,
    backgroundColor: theme.red,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconCont: {
    width: 60,
    height: 60,
    backgroundColor: theme.mediumGrey,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCont: {
    paddingLeft: 20,
  },
  trxCont: {
    height: 100,
    width: width * 0.85,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 20,
    backgroundColor: theme.white,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.lineBlack,
    shadowColor: theme.lineBlack,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    elevation: 5,
  },
  priceText: {
    fontSize: theme.font22,
    fontWeight: theme.bold,
  },
  textRed: {
    color: theme.red,
  },
  textGreen: {
    color: theme.green,
  },
  categoryText: {
    fontSize: theme.font12,
    fontWeight: '100',
  },
  noteText: {
    fontSize: theme.font16,
    fontWeight: theme.medium,
  },
  monthText: {
    fontWeight: theme.bold,
    fontSize: theme.font32,
  },
  dayText: {
    fontSize: theme.font18,
    fontWeight: theme.bold,
    paddingBottom: 10,
  },
});

export default styles;
