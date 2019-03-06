import { Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const metrics = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    sizeIcon: isIphoneX() ? 24 : 24,
    headerHeight: isIphoneX() ? 90 : 50,
    headerPositioning: isIphoneX() ? 'flex-end' : 'center'
  };
  
export default metrics;
