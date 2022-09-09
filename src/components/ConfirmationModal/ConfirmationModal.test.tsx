import { fireEvent, screen } from "@testing-library/react";
import { noop, render } from "../../utils/testing";
import { ConfirmationModal } from "./ConfirmationModal";

const title = "Are you sure you want to delete it?";
const confirmButtonLabel = "Delete";
const cancelButtonLabel = "Cancel";

describe("modal open", () => {
  it("renders the modal", () => {
    render(
      <ConfirmationModal
        title={title}
        confirmButtonLabel={confirmButtonLabel}
        cancelButtonLabel={cancelButtonLabel}
        open={true}
        loading={false}
        onCancel={noop}
        onConfirm={noop}
      />
    );
    expect(document.body).toMatchSnapshot();
  });
});

describe("modal close", () => {
  it("renders not the modal", () => {
    render(
      <ConfirmationModal
        title={title}
        confirmButtonLabel={confirmButtonLabel}
        cancelButtonLabel={cancelButtonLabel}
        open={false}
        loading={false}
        onCancel={noop}
        onConfirm={noop}
      />
    );
    expect(document.body).toMatchSnapshot();
  });
});

describe("loading", () => {
  it("renders the modal w/ loading state", () => {
    render(
      <ConfirmationModal
        title={title}
        confirmButtonLabel={confirmButtonLabel}
        cancelButtonLabel={cancelButtonLabel}
        open={true}
        loading={true}
        onCancel={noop}
        onConfirm={noop}
      />
    );
    expect(document.body).toMatchSnapshot();
  });
});

describe("click on confirm button", () => {
  it("triggers the confirm listener", async () => {
    const confirmHandler = jest.fn();

    render(
      <ConfirmationModal
        title={title}
        confirmButtonLabel={confirmButtonLabel}
        cancelButtonLabel={cancelButtonLabel}
        open={true}
        loading={false}
        onCancel={noop}
        onConfirm={confirmHandler}
      />
    );

    fireEvent.click(screen.getByText(confirmButtonLabel));

    expect(confirmHandler).toHaveBeenCalled();
  });
});

describe("click on cancel button", () => {
  it("triggers the cancel listener", async () => {
    const cancelHandler = jest.fn();

    render(
      <ConfirmationModal
        title={title}
        confirmButtonLabel={confirmButtonLabel}
        cancelButtonLabel={cancelButtonLabel}
        open={true}
        loading={false}
        onCancel={cancelHandler}
        onConfirm={noop}
      />
    );

    fireEvent.click(screen.getByText(cancelButtonLabel));

    expect(cancelHandler).toHaveBeenCalled();
  });
});
