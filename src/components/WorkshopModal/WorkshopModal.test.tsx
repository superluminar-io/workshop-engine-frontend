import { fireEvent, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { noop, render } from "../../utils/testing";
import { WorkshopFormData, WorkshopModal } from "./WorkshopModal";
import * as translations from "./WorkshopModal.translations";

const title = "Create new workshop";
const submitButtonLabel = "Create";

const TestComponent: React.FunctionComponent<{
  open: boolean;
  onSubmit?(): void;
  onCancel?(): void;
}> = ({ open, onSubmit, onCancel }) => {
  const methods = useForm<WorkshopFormData>();
  return (
    <WorkshopModal
      title={title}
      submitButtonLabel={submitButtonLabel}
      control={methods.control}
      open={open}
      onSubmit={onSubmit || noop}
      onCancel={onCancel || noop}
    />
  );
};

describe("modal opened", () => {
  it("renders the modal", () => {
    render(<TestComponent open={true} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("modal closed", () => {
  it("renders the modal", () => {
    render(<TestComponent open={false} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("click on submit button", () => {
  it("triggers the submit handler", async () => {
    const submitHandler = jest.fn();
    render(<TestComponent open={true} onSubmit={submitHandler} />);

    // Set workshop title for a valid form submission
    fireEvent.change(
      screen.getByPlaceholderText(translations.inputTitlePlaceholder),
      {
        target: { value: "Serverless Workshop" },
      }
    );

    fireEvent.click(screen.getByText(submitButtonLabel));

    expect(submitHandler).toHaveBeenCalled();
  });
});

describe("click on cancel button", () => {
  it("triggers the canel handler", async () => {
    const cancelHandler = jest.fn();
    render(<TestComponent open={true} onCancel={cancelHandler} />);

    fireEvent.click(screen.getByText(translations.cancelButtonLabel));

    expect(cancelHandler).toHaveBeenCalled();
  });
});
