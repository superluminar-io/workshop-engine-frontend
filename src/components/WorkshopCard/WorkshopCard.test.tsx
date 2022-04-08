import { render } from "../../utils/testing";
import { WorkshopCard } from "./WorkshopCard";

it("renders the layout", () => {
  const { container } = render(
    <WorkshopCard title="Title" awsAccountId="12345678" />
  );
  expect(container).toMatchSnapshot();
});
