import { render } from "../../utils/testing";
import { GlobalCircularProgress } from "./GlobalCircularProgress";

it("renders the component", () => {
  render(<GlobalCircularProgress />);
  expect(document.body).toMatchSnapshot();
});
