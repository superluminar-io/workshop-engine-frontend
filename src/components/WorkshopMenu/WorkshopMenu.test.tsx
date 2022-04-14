import { noop, render } from "../../utils/testing";
import { WorkshopMenu } from "./WorkshopMenu";
import { fireEvent } from "@testing-library/react";
import { MenuItem } from "@mui/material";

describe("open", () => {
  it("renders context menu", async () => {
    const { getByRole, findByText } = render(
      <WorkshopMenu id="abc">
        <MenuItem>Edit</MenuItem>
      </WorkshopMenu>
    );

    fireEvent.click(getByRole("button"));
    await findByText("Edit");

    expect(document.body).toMatchSnapshot();
  });
});

describe("close", () => {
  it("renders icon button", () => {
    render(
      <WorkshopMenu id="abc">
        <MenuItem>Edit</MenuItem>
      </WorkshopMenu>
    );
    expect(document.body).toMatchSnapshot();
  });
});
