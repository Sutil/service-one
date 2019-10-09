import styled from 'styled-components/native';
import SimpleDatetimePicker from 'simple-datetime-picker';
import MoneyInputLib from '../../components/MoneyInput';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const DateInput = styled(SimpleDatetimePicker)`
  font-size: 18px;
  color: #999;
  height: 50px;
  border: 1px;
  border-color: #777;
  border-radius: 12px;
  padding: 12px;
`;

export const MoneyInput = styled(MoneyInputLib)`
  border: 1px;
  border-color: #777;
  border-radius: 12px;
  margin: 20px 0;
  font-size: 18px;
  padding: 10px;
`;
