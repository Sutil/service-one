import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MoneyFormat from '../../components/MoneyFormat';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  JobList,
  JobContainer,
  JobInfo,
  JobTitle,
  JobDate,
  JobPrice,
  Footer,
  Totals,
  JobTotal,
  JobTotalPrice,
  AddButton,
  DeleteButton,
} from './styles';

function Home({ navigation, isFocused }) {
  const [jobs, setJobs] = useState([]);

  function jobFormat(job) {
    return {
      ...job,
      formattedDate: format(parseISO(job.date), "dd 'de' MMMM 'às' HH:mm'h'", {
        locale: pt,
      }),
    };
  }

  useEffect(() => {
    async function loadJobs() {
      try {
        const response = await api.get('jobs');

        const jobList = response.data.map(j => jobFormat(j));

        setJobs(jobList);
      } catch (err) {
        console.log(err.response);
        Alert.alert('Erro', 'Falha ao buscar jobs!');
      }
    }

    loadJobs();
  }, [isFocused]);

  const totalJobsPrice = useMemo(() => {
    return jobs.reduce((tot, job) => tot + job.price, 0);
  }, [jobs]);

  const totalJobs = useMemo(() => jobs.length, [jobs]);

  async function handleDelete(item) {
    try {
      await api.delete(`jobs/${item.id}`);

      setJobs(jobs.filter(job => job.id !== item.id));
    } catch (err) {
      Alert.alert('Erro', 'Falha ao excluir job!');
    }
  }

  function deleteRequest(item) {
    const btYes = {
      text: 'Sim',
      onPress: () => {
        handleDelete(item);
      },
    };
    const btNo = { text: 'Não' };

    Alert.alert('Atenção', `Deseja excluir o job '${item.title}'?`, [
      btNo,
      btYes,
    ]);
  }

  function renderJob({ item }) {
    return (
      <JobContainer
        onPress={() => navigation.navigate('JobEdit', { job: item })}
      >
        <JobTitle>{item.title}</JobTitle>
        <JobInfo>
          <JobDate>{item.formattedDate}</JobDate>

          <MoneyFormat moneyValue={item.price} TextRender={JobPrice} />
        </JobInfo>
        <DeleteButton onPress={() => deleteRequest(item)}>
          <Icon name="delete" size={35} color="#FF8B0D" />
        </DeleteButton>
      </JobContainer>
    );
  }
  return (
    <Container>
      <JobList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={item => String(item.id)}
      />
      <Footer>
        <Totals>
          <JobTotal>{totalJobs} jobs</JobTotal>
          <MoneyFormat moneyValue={totalJobsPrice} TextRender={JobTotalPrice} />
        </Totals>
        <AddButton onPress={() => navigation.navigate('JobEdit')}>
          <Icon name="add" size={50} color="#fff" />
        </AddButton>
      </Footer>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    header: <Header navigation={navigation} />,
  };
};

export default withNavigationFocus(Home);
