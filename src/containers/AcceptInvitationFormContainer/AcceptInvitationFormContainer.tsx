import React, { useState } from "react";
import { useAcceptInvitationMutation } from "./AcceptInvitationFormContainer.generated";
import {
  AcceptInvitationFormData,
  AcceptInvitationForm,
} from "../../components/AcceptInvitationForm/AcceptInvitationForm";
import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/clerk-react";
import * as translations from "./AcceptInvitationFormContainer.translations";
import { useRouter } from "next/router";

export interface AcceptInvitationFormContainerProps {
  inviteId: string;
}

export const AcceptInvitationFormContainer: React.FunctionComponent<AcceptInvitationFormContainerProps> =
  ({ inviteId }) => {
    const [loading, setLoading] = useState(false);
    const { signIn } = useSignIn();
    const router = useRouter();
    const formMethods = useForm<AcceptInvitationFormData>();
    const [acceptInvitation] = useAcceptInvitationMutation();

    const handleSubmit = async (data: AcceptInvitationFormData) => {
      setLoading(true);

      await acceptInvitation({
        variables: {
          inviteId,
          emailAddress: data.emailAddress,
        },
      });

      await signIn.create({
        identifier: data.emailAddress,
      });

      router.push("/sign-in/factor-one");
    };

    return (
      <AcceptInvitationForm
        loading={loading}
        control={formMethods.control}
        submitButtonLabel={translations.submitButtonLabel}
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      />
    );
  };
