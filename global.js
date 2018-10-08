import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');



//Guideline sizes are based on standard ~5" screen mobile device
 let pixel  = 1;
 switch (PixelRatio.get()) {
    case 3:
       pixel = 1;
        break;
    case 2:
       pixel = 1;
        break;
    case 1.5:
       pixel = 1.28;
        break;
    case 4:
       pixel = 1;
        break;
    case 5:
       pixel = 1;
        break;
    case 6:
       pixel = 1;
}
 
const scale = size => size / pixel;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};