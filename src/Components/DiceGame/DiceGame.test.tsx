import { render as rtlRender, screen } from '@testing-library/react';
import DiceGame from './index';

import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import store from '../../store/index';

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('DiceGame', () => {
  test('render title correctly', () => {
    render(<DiceGame />);
    const diceGameElement = screen.getByRole('heading', {
      name: 'DICE GAME',
    });
    expect(diceGameElement).toBeInTheDocument();
  });

  test('render button Over correctly', () => {
    render(<DiceGame />);
    const diceGameElement = screen.getByRole('button', {
      name: 'OVER',
    });
    expect(diceGameElement).toBeInTheDocument();
  });

  test('render button Under correctly', () => {
    render(<DiceGame />);
    const diceGameElement = screen.getByRole('button', {
      name: 'UNDER',
    });
    expect(diceGameElement).toBeInTheDocument();
  });
});
