import { fireEvent, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { noop, render } from "../../utils/testing";
import { WorkshopFormData, WorkshopModal } from "./WorkshopModal";
import * as translations from "./WorkshopModal.translations";

const title = "Create new workshop";
const submitButtonLabel = "Create";

const TestComponent: React.FunctionComponent<{
  open: boolean;
  loading: boolean;
  onSubmit?(): void;
  onCancel?(): void;
}> = ({ open, loading, onSubmit, onCancel }) => {
  const methods = useForm<WorkshopFormData>();
  return (
    <WorkshopModal
      title={title}
      submitButtonLabel={submitButtonLabel}
      control={methods.control}
      open={open}
      loading={loading}
      onSubmit={onSubmit || noop}
      onCancel={onCancel || noop}
    />
  );
};

describe("modal open", () => {
  it("renders the modal", () => {
    render(<TestComponent open={true} loading={false} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("modal close", () => {
  it("renders the modal", () => {
    render(<TestComponent open={false} loading={false} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("loading", () => {
  it("renders the modal", () => {
    render(<TestComponent open={false} loading={true} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("click on submit button", () => {
  it("triggers the submit handler", async () => {
    const submitHandler = jest.fn();
    render(
      <TestComponent open={true} loading={false} onSubmit={submitHandler} />
    );

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
    render(
      <TestComponent open={true} loading={false} onCancel={cancelHandler} />
    );

    fireEvent.click(screen.getByText(translations.cancelButtonLabel));

    expect(cancelHandler).toHaveBeenCalled();
  });
});
