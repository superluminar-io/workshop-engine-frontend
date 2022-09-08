import { fireEvent } from "@testing-library/react";
import { render } from "../../utils/testing";
import { Header } from "./Header";

describe("w/ sign out function", () => {
  it("renders the header", () => {
    const { container } = render(<Header signOut={() => null} />);
    expect(container).toMatchSnapshot();
  });

  it("calls the sign out handler", async () => {
    const signOutHandler = jest.fn();
    const { queryByText } = render(<Header signOut={signOutHandler} />);
    await fireEvent.click(queryByText("Logout"));
    expect(signOutHandler).toHaveBeenCalled();
  });
});

describe("w/o sign out function", () => {
  it("renders the header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
