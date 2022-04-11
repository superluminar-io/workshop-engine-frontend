import { render } from "../../utils/testing";
import { Layout } from "./Layout";

it("renders the layout", () => {
  const { container } = render(
    <Layout title="Title" signOut={() => null}>
      Nulla et pariatur elit do mollit dolor nostrud reprehenderit tempor esse
      labore voluptate.
    </Layout>
  );
  expect(container).toMatchSnapshot();
});

describe("/w element on the right side", () => {
  it("renders the layout", () => {
    const { container } = render(
      <Layout
        title="Title"
        signOut={() => null}
        titleRightSide={<span>element on the right side</span>}
      >
        Nulla et pariatur elit do mollit dolor nostrud reprehenderit tempor esse
        labore voluptate.
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
