import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Title,
  Input,
  Button,
  TextButton,
} from '../../components/global';
import api from '../../services/api';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function backToLogin() {
    navigation.goBack();
  }

  async function handleSignUp() {
    try {
      await api.post('users', {
        name,
        email,
        password,
      });

      backToLogin();
    } catch (err) {
      Alert.alert('Erro', 'Falha ao criar conta');
    }
  }

  return (
    <Container>
      <Title>Meus Serviços</Title>
      <Input placeholder="Nome completo" value={name} onChangeText={setName} />
      <Input placeholder="Seu e-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleSignUp}>
        <TextButton>Criar conta</TextButton>
      </Button>
      <Button link onPress={backToLogin}>
        <TextButton>Voltar ao login</TextButton>
      </Button>
    </Container>
  );
}
