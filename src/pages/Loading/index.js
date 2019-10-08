import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

import { Container } from '../../components/global';
import api from '../../services/api';

export default function Loading({ navigation }) {
  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        navigation.navigate('AppStack');
      } else {
        navigation.navigate('AuthStack');
      }
    }

    checkToken();
  }, [navigation]);

  return (
    <Container>
      <ActivityIndicator color="#ff8b0d" size={50} />
    </Container>
  );
}
