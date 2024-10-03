import {
  convertRGBColorByPixel,
  convertRGBColorByPlane,
  convertYBRFullByPixel,
  convertYBRFullByPlane,
  convertPALETTECOLOR,
} from './imageLoader/colorSpaceConverters/index';

import { default as wadouri } from './imageLoader/wadouri/index';
import { default as wadors } from './imageLoader/wadors/index';
import { default as configure } from './imageLoader/configure';
import { default as convertColorSpace } from './imageLoader/convertColorSpace';
import { default as createImage } from './imageLoader/createImage';
import { default as decodeJPEGBaseline8BitColor } from './imageLoader/decodeJPEGBaseline8BitColor';
import { default as getImageFrame } from './imageLoader/getImageFrame';
import { default as getMinMax } from './shared/getMinMax';
import { default as isColorImage } from './shared/isColorImage';
import { default as isJPEGBaseline8BitColor } from './imageLoader/isJPEGBaseline8BitColor';
import { default as getPixelData } from './imageLoader/wadors/getPixelData';
import { internal } from './imageLoader/internal/index';
import { default as external } from './externalModules';
import * as constants from './constants';
import type * as Types from './types';

const cornerstoneDICOMImageLoader = {
  constants,
  convertRGBColorByPixel,
  convertRGBColorByPlane,
  convertYBRFullByPixel,
  convertYBRFullByPlane,
  convertPALETTECOLOR,
  wadouri,
  wadors,
  configure,
  convertColorSpace,
  createImage,
  decodeJPEGBaseline8BitColor,
  getImageFrame,
  getPixelData,
  getMinMax,
  isColorImage,
  isJPEGBaseline8BitColor,
  internal,
  external,
};

export {
  constants,
  convertRGBColorByPixel,
  convertRGBColorByPlane,
  convertYBRFullByPixel,
  convertYBRFullByPlane,
  convertPALETTECOLOR,
  wadouri,
  wadors,
  configure,
  convertColorSpace,
  createImage,
  decodeJPEGBaseline8BitColor,
  getImageFrame,
  getPixelData,
  getMinMax,
  isColorImage,
  isJPEGBaseline8BitColor,
  internal,
  external,
};

export type { Types };

export default cornerstoneDICOMImageLoader;