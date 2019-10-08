import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
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
} from './styles';

export default function Home({ navigation }) {
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
  }, []);

  const totalJobsPrice = useMemo(() => {
    return jobs.reduce((tot, job) => tot + job.price, 0);
  }, [jobs]);

  const totalJobs = useMemo(() => jobs.length, [jobs]);

  function renderJob({ item }) {
    return (
      <JobContainer>
        <JobTitle>{item.title}</JobTitle>
        <JobInfo>
          <JobDate>{item.formattedDate}</JobDate>

          <MoneyFormat moneyValue={item.price} TextRender={JobPrice} />
        </JobInfo>
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
