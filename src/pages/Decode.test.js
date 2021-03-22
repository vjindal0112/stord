import Decode from "./Decode";
import { render, screen } from '@testing-library/react';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    base62Str: "b",
  }),
}));

it('renders Decode screen and loading indicator exists', () => {
  render(<Decode />);
  const loader = screen.getByLabelText("audio-loading");
  expect(loader).toBeInTheDocument();
});