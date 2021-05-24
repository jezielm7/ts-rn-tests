/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1C2833;
`;

export const Text = styled.Text`
  color: #FFF;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 20px;

    align-items: center;
    justify-content: center;
    background-color: #6767d7;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;
