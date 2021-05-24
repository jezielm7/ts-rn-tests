import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import nock from 'nock';

import App from '../../../../App';

jest.useFakeTimers();

global.fetch = require('node-fetch');

nock('https://api.github.com').get('/users/jezielm7').reply(200, {
  name: 'Jeziel Marques',
});

describe('Render successfully', () => {
  it('renders App successfully', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders home components successfully', async () => {
    const { getByText } = render(<App />);

    await getByText('Press to Login');
    await getByText('Enter');

    // Em alguns casos específicos, o "expect" não é necessário,
    // pois as próprias funções geram as excessões, como acima.
  });

  it('call github api when clicks on login button', async () => {
    const { getByText } = render(<App />);

    const button = await getByText('Enter');

    await getByText('Press to Login');

    await act(() => fireEvent.press(button));

    jest.advanceTimersByTime(1000);

    await getByText('Jeziel Marques');
  });
});
