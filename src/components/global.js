import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #49265c;
  padding: 30px;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #ff8b0d;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 50px;
  background: #fff;
  margin: 20px 0;
  border-radius: 12px;
  padding: 0 10px;
  font-size: 18px;
  border: 1px;
  border-color: #777;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  background: ${props => (props.link ? 'transparent' : '#ff8b0d')};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 20px 0;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
