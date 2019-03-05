import { Platform } from 'react-native';
import { normalizeFont } from '../services/helpers';

const fontFamilyRegular = {
  fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'
};

const fontFamilyBold = {
  fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
  fontWeight: 'bold'
};

const fonts = {
  global: {
    ...fontFamilyRegular
  },
  h1: {
    ...fontFamilyBold,
    fontSize: normalizeFont(24)
  },
  h2: {
    ...fontFamilyBold,
    fontSize: normalizeFont(22)
  },
  h3: {
    ...fontFamilyBold,
    fontSize: normalizeFont(20)
  },
  h4: {
    ...fontFamilyBold,
    fontSize: normalizeFont(17)
  },
  h5: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(16)
  },
  h6: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(14)
  },
  h7: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(12)
  },
  caption: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(10)
  },
  footnote: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(11)
  },
  hint: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(13)
  },
  hTitle: {
    ...fontFamilyBold,
    fontSize: normalizeFont(18)
  },
  formTitle: {
    ...fontFamilyBold,
    fontSize: normalizeFont(16)
  },
  formButton: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(20)
  },
  textButton: {
    ...fontFamilyRegular,
    fontSize: normalizeFont(18)
  }
};

export default fonts;
