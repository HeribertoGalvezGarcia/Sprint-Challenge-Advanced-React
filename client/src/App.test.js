import React from "react";
import {fireEvent, render, waitForElement, waitForElementToBeRemoved} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('dark mode works', () => {
  const {getByTestId} = render(<App />);
  const toggle = getByTestId("darkModeToggle");
  fireEvent.click(toggle);
  expect(document.body.classList.contains("dark-mode"));
  fireEvent.click(toggle);
  expect(!document.body.classList.contains("dark-mode"));
  fireEvent.dblClick(toggle);
  expect(!document.body.classList.contains("dark-mode"));
  fireEvent.contextMenu(toggle);
  expect(!document.body.classList.contains("dark-mode"));
});

test('info gets displayed', async () => {
  const {getByTestId} = render(<App />);
  await waitForElement(() => getByTestId("dataContainer"));
});
