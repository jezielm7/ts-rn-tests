import React, { useState } from 'react';

import { Container, Text, Button, BtnText } from './styles';

function Home() {
  const [text, setText] = useState('Press to Login');

  async function getUser() {
    const result = await fetch('https://api.github.com/users/jezielm7');
    const data = await result.json();

    setText(data.name);
  }

  return (
    <Container>
      <Text>{text}</Text>

      <Button onPress={getUser}>
        <BtnText>Enter</BtnText>
      </Button>
    </Container>
  );
}

export default Home;
