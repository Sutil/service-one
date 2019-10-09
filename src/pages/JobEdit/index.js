import React, { useState } from 'react';
import { Alert } from 'react-native';
import { parseISO } from 'date-fns';
import { Input, Button, TextButton } from '../../components/global';
import { Container, DateInput, MoneyInput } from './styles';
import api from '../../services/api';

export default function JobEdit({ navigation }) {
  const job = navigation.getParam('job', {});

  const { id } = job;
  const [title, setTitle] = useState(job.title);
  const [date, setDate] = useState(job.date ? parseISO(job.date) : new Date());
  const [price, setPrice] = useState(job.price);

  async function update() {
    try {
      await api.put(`jobs/${id}`, { id, title, date, price });
    } catch (err) {
      Alert.alert('Erro', 'Falha ao salvar');
    }
  }

  async function create() {
    try {
      await api.post('jobs', { title, date, price });
    } catch (err) {
      Alert.alert('Erro', 'Falha ao salvar');
    }
  }

  async function handleSubmit() {
    if (id) {
      await update();
    } else {
      await create();
    }
    navigation.goBack();
  }
  return (
    <Container>
      <Input
        placeholder="Qual é o job?"
        autoCapitalize="words"
        value={title}
        onChangeText={setTitle}
      />
      <DateInput placeholder="Quando?" date={date} onValueChange={setDate} />
      <MoneyInput
        value={price}
        onChange={setPrice}
        placeholder="Qual o valor?"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />

      <Button onPress={handleSubmit}>
        <TextButton>Salval</TextButton>
      </Button>
    </Container>
  );
}
