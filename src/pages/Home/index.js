import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return <View />;
}

Home.navigationOptions = ({ navigation }) => {
  return {
    header: <Header navigation={navigation} />,
  };
};
