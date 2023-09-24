import React from 'react';
import { render, screen } from '@testing-library/react';
// @ts-ignore
import userEvent from '@testing-library/user-event';
import App from '@/src/pages/_app';

test('renders App component', () => {
  render(<App />);

  // Verifica se o componente é renderizado corretamente
  expect(screen.getByText('YOUR INFO')).toBeInTheDocument();

  // Simula ação do usuário (se aplicável)
  userEvent.click(screen.getByText('Next Step'));

  // Verifica o resultado da ação do usuário
  expect(screen.getByText('SELECT PLAN')).toBeInTheDocument();
});
