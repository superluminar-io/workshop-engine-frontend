import { fireEvent } from "@testing-library/react";
import { render } from "../../utils/testing";
import { Header } from "./Header";

it("renders the header", () => {
  const { container } = render(<Header signOut={() => null} />);
  expect(container).toMatchSnapshot();
});

describe("click on logout button", () => {
  it("calls the sign out handler", async () => {
    const signOutHandler = jest.fn();
    const { queryByText } = render(<Header signOut={signOutHandler} />);
    await fireEvent.click(queryByText("Logout"));
    expect(signOutHandler).toHaveBeenCalled();
  });
});
