import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {
  Container,
  Title,
  Input,
  Button,
  TextButton,
} from '../../components/global';

import api from '../../services/api';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleLogin() {
    try {
      const response = await api.post('login', {
        email,
        password,
      });

      const {token} = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('token', token);

      navigation.navigate('AppStack');
    } catch (err) {
      Alert.alert('Erro', 'Falha no login');
    }
  }

  return (
    <Container>
      <Title>Meus Serviços</Title>
      <Input placeholder="Seu e-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin}>
        <TextButton>Entrar</TextButton>
      </Button>
      <Button link onPress={goToSignUp}>
        <TextButton>Criar conta</TextButton>
      </Button>
    </Container>
  );
}
