import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const JobList = styled.FlatList``;

export const JobContainer = styled.View`
  padding: 20px;
  background: #9575cd;
  margin: 5px 0;
  border-radius: 12px;
`;

export const JobTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const JobInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const JobDate = styled.Text`
  color: #ddd;
  font-size: 18px;
`;

export const JobPrice = styled.Text`
  color: #b9f6ca;
  font-size: 20px;
`;

export const Footer = styled.View`
  height: 70px;
  background: #fff;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Totals = styled.View``;
export const JobTotal = styled.Text`
  font-size: 25px;
  color: #333;
`;
export const JobTotalPrice = styled.Text`
  font-size: 22px;
  color: #444;
`;

export const AddButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: #ff8b0d;
  justify-content: center;
  align-items: center;
`;
