import { render, screen } from '@testing-library/react';
import App from './App';

test('Render the the whole app without crashing', () => {
  render(<App />);
});

test('Make sure the input is rendered', () => {
  render(<App />);
  const input = screen.getByTestId('image-input');
  expect(input).toBeInTheDocument();
});

test('Checks the upload button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Upload Image/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check the status text before image upload', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select at least one image to get started./i);
  expect(linkElement).toBeInTheDocument();
});

