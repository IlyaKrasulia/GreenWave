import axios from 'axios';
import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateBaners} from 'redux/slices/banersSclice';
import {Colors} from 'utils/styles';

const baners = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0-4QUt7QESSIW_2BkiYj4cbW-401GVFG2zKFutNBOsoAuiJwqXUmwTSmesb1f2ieQbI&usqp=CAU',
  'https://media.istockphoto.com/id/1262319412/uk/векторні-зображення/хеллоуїн-продажу-до-50-знижки-рожевий-банер-зі-знижкою-з-рамою-осінніми.jpg?s=1024x1024&w=is&k=20&c=Zh_cobU3AP9hxLQbNyCehFzOJxPNEocGMi8O-did4Ps=',
  'https://daewoo-power.com.ua/image/data/news_articles/banner-daewoo-kultivatory-gor-ukr.jpg',
  'https://img.tsn.ua/cached/045/tsn-467385bb6791cfb7cbfd1f8cbeac76e2/thumbs/428x268/c0/59/f39d24c750e303fd235837baac5959c0.png',
];

const BanersScreen = () => {
  const dispatch = useDispatch();
  const [selectedBaner, setSelectedBaner] = useState(0);
  const [selectedBanerSrc, setSelectedBanerSrc] = useState('');

  const handleAddBaner = () => {
    axios.post('https://6480f41ef061e6ec4d4a1d0d.mockapi.io/baners', {
      baner: selectedBanerSrc,
    });
    getBaners();
  };

  const getBaners = async () => {
    try {
      const {data} = await axios.get(
        'https://6480f41ef061e6ec4d4a1d0d.mockapi.io/baners',
      );
      dispatch(updateBaners(data));
    } catch (err: any) {
      console.log(err, ' => err getInfo');
    }
  };

  return (
    <AppLayout>
      <Header screenName="Керування банераи" />
      <SFlex flexDirection="column" justifyContent="center" marginTop={20}>
        {baners.map((item: any, index: number) => {
          console.log(item);

          return (
            <SButton
              onPress={() => {
                setSelectedBaner(index);
                setSelectedBanerSrc(item);
              }}
              styleBtn={{width: '90%', height: 100, marginBottom: 20}}>
              <Image
                key={index}
                source={{uri: item}}
                style={
                  selectedBaner === index
                    ? [styles.selectedBaner, {height: 100, width: '100%'}]
                    : {height: 100, width: '100%'}
                }
              />
            </SButton>
          );
        })}
      </SFlex>
      <SButton
        onPress={handleAddBaner}
        styleBtn={styles.button}
        baseColor={Colors.greenLine}
        borderRadius={10}>
        <SText color={Colors.white} textAlign="center">
          Додати
        </SText>
      </SButton>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    position: 'absolute',
    bottom: 30,
    width: '90%',
  },
  selectedBaner: {
    borderColor: Colors.green,
    borderWidth: 5,
  },
});

export default BanersScreen;
