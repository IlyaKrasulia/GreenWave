import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SView} from './Styled/SView';
import {Colors, screenWidth} from 'utils/styles';
import {SText} from './Styled/SText';
import {SFlex} from './Styled/SFlex';
import {SButton} from './Styled/SButton';
import { useNavigation } from '@react-navigation/native';

interface IProps {
    screenName: string;
}

const Header = ({ screenName }: IProps) => {
  const {goBack}: any = useNavigation();

  return (
    <View style={styles.wrapper}>
      <SFlex justifyContent='space-between' marginLeft={15} marginRight={25}>
        <SButton onPress={() => goBack()}>
          <Image
            source={require('../assets/icons/back-arrow.png')}
            style={{width: 20, height: 20}}
          />
        </SButton>
        <SText color={Colors.white}>{screenName}</SText>
        <View></View>
      </SFlex>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.greenLine,
    height: 100,
    width: screenWidth,
    top: -60,
    paddingTop: 60,
  },
});

export default Header;
