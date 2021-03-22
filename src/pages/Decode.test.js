import TestRenderer from "react-test-renderer";
import Decode from "./Decode";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    base62Str: "b",
  }),
}));

it("renders Decode screen and no elements should render", () => {
  const tree = TestRenderer.create(<Decode />).toJSON();
  expect(tree).toBe(null);
});