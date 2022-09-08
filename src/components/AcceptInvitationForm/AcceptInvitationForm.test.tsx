import { fireEvent } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { noop, render } from "../../utils/testing";
import {
  AcceptInvitationFormData,
  AcceptInvitationForm,
} from "./AcceptInvitationForm";
import * as translations from "./AcceptInvitationForm.translations";

const submitButtonLabel = "Join";

const TestComponent: React.FunctionComponent<{
  loading: boolean;
  onSubmit?(): void;
}> = ({ loading, onSubmit }) => {
  const methods = useForm<AcceptInvitationFormData>();
  return (
    <AcceptInvitationForm
      submitButtonLabel={submitButtonLabel}
      control={methods.control}
      loading={loading}
      onSubmit={onSubmit || noop}
    />
  );
};

describe("not loading", () => {
  it("renders the form", () => {
    render(<TestComponent loading={false} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("loading", () => {
  it("renders the form", () => {
    render(<TestComponent loading={true} />);
    expect(document.body).toMatchSnapshot();
  });
});

describe("click on submit button", () => {
  it("triggers the submit handler", async () => {
    const submitHandler = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <TestComponent loading={false} onSubmit={submitHandler} />
    );

    // Set email address for a valid form submission
    fireEvent.change(getByPlaceholderText(translations.inputEmailPlaceholder), {
      target: { value: "me@example.com" },
    });

    fireEvent.submit(getByText(submitButtonLabel));

    expect(submitHandler).toHaveBeenCalled();
  });
});
