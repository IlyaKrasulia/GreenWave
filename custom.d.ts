// for TS 'react-native-svg'
declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }
  
  declare module '*.png'
  declare module '*.jpg'
  
  // for TS 'react-native-select-multiple'
  declare module 'react-native-select-multiple';
  
  // for TS 'toggle-switch-react-native'
  declare module 'toggle-switch-react-native';
  
  // for TS 'crypto-js'
  declare module 'crypto-js/sha256';
  declare module 'react-native-crypto-js';
  
  declare module 'react-native-stars';
  