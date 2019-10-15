import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { Input, Button, TextButton } from '../../components/global';

export default function Filter({ navigation }) {
  const defaultFilter = useSelector(state => state.textFilter);
  const [filter, setFilter] = useState(defaultFilter);
  const dispatch = useDispatch();

  function doFilter() {
    const action = {
      type: 'SET_FILTER',
      filter,
    };
    dispatch(action);
    navigation.goBack();
  }

  function clearFilter() {
    setFilter(null);
    const action = {
      type: 'SET_FILTER',
      filter: null,
    };
    dispatch(action);
  }

  return (
    <Container>
      <Input placeholder="Filtro" value={filter} onChangeText={setFilter} />
      <Button onPress={doFilter}>
        <TextButton>Aplicar filtro</TextButton>
      </Button>
      <Button onPress={clearFilter}>
        <TextButton>Limpar filtro</TextButton>
      </Button>
    </Container>
  );
}
