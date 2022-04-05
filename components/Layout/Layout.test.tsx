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
