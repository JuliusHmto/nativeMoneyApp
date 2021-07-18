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
    height: height * 0.4,
    width: width,
    backgroundColor: theme.green,
  },
  topTextContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  containerDivider: {
    backgroundColor: theme.white,
    height: height * 1.5,
    width: width,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  contDivide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.white,
    position: 'absolute',
    marginVertical: width * 0.27,
    borderRadius: 30,
    width: width,
    top: 120,
    flex: 1,
  },
  bottomContainer: {
    width: width,
    height: height * 1.5,
    backgroundColor: theme.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  insideTopContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  nameText: {
    color: theme.white,
    fontSize: theme.font18,
    fontWeight: theme.medium,
    paddingBottom: 10,
  },
  subText: {
    color: theme.white,
    fontSize: theme.font12,
  },
  bottomText: {
    color: theme.white,
    fontSize: theme.font12,
    paddingBottom: 50,
  },
  moneyText: {
    color: theme.white,
    fontSize: theme.font36,
    fontWeight: theme.bold,
    paddingVertical: 5,
  },
  sideViewButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 7,
  },
  mainButton: {
    height: 50,
    width: 160,
    alignItems: 'center',
    marginHorizontal: 7,
    backgroundColor: theme.white,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.lineBlack,
    shadowColor: theme.lineBlack,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    elevation: 5,
  },
  titleText: {
    fontSize: theme.font24,
    fontWeight: theme.bold,
  },
  insideMiddleContainer: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  inMidCont: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentCont: {
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
  recentImg: {
    height: 100,
    width: 100,
    alignItems: 'center',
  },
  insideBottomContainer: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  pieChartCont: {
    marginTop: 10,
    height: 700,
    width: width - 60,
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
