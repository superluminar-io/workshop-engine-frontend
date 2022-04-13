import { render } from "../../utils/testing";
import { WorkshopCard } from "./WorkshopCard";

it("renders the workshop card", () => {
  const { container } = render(
    <WorkshopCard title="Title" awsAccountId="12345678" />
  );
  expect(container).toMatchSnapshot();
});

describe("loading", () => {
  it("renders skeleton", () => {
    const { container } = render(<WorkshopCard variant="loading" />);
    expect(container).toMatchSnapshot();
  });
});

describe("w/o AWS Account ID", () => {
  it("renders w/o aws management console button", () => {
    const { container } = render(<WorkshopCard title="Title" />);
    expect(container).toMatchSnapshot();
  });
});
