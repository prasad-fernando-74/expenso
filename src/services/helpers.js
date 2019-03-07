import { Platform, Dimensions, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

// based on iphone 6s's scale and Galaxy S6
export const scaleX = SCREEN_WIDTH / (Platform.OS === 'ios' ? 375 : 360);
export const scaleY = SCREEN_HEIGHT / (Platform.OS === 'ios' ? 667 : 640);

export function normalizeFont(size) {
  if (Platform.isPad) {
    return size;
  }
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size) * scaleX);
  }
  return Math.round(PixelRatio.roundToNearestPixel(size) * scaleX) - 2;
}

export function randomHex() {
  return '#' + Math.random().toString(16).slice(2, 8);
}

export function scaleHeight(height, isScaleExpend = true) {
  let delta = scaleY;
  if (!isScaleExpend && scaleY > 1) { delta = 1; }
  return Math.round(height * delta);
}