import React from 'react';
import { Input } from '../../components/global';
import { Container, DateInput } from './styles';

export default function JobEdit() {
  return (
    <Container>
      <Input placeholder="Qual é o job?" autoCapitalize="words" />
      <DateInput
        placeholder="Quando?"
        date={new Date()}
        onValueChange={() => {}}
      />
    </Container>
  );
}
