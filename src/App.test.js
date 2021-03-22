import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders home screen and button exists', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: /Shorten/i});
  expect(buttonElement).toBeInTheDocument();
});

it('renders home screen and input exists', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Paste link here');
  expect(inputElement).toBeInTheDocument();
});

it('renders home screen and image accessibility exists', () => {
  render(<App />);
  const waveAlt = screen.getByAltText('background wave');
  expect(waveAlt).toBeInTheDocument();
});

it('types inside input', () => {
  render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})

it('renders home screen correctly', () => {
  const tree = TestRenderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
