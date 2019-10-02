import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Title} from './styles';

export default function Header({navigation}) {
  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('AuthStack');
  }

  return (
    <Container>
      <Title>Jobs</Title>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="logout" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
