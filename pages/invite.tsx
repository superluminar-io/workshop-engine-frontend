import React from "react";
import { Layout } from "../src/components/Layout/Layout";
import { AcceptInvitationFormContainer } from "../src/containers/AcceptInvitationFormContainer/AcceptInvitationFormContainer";
import { Alert } from "@mui/material";

export interface InviteProps {
  inviteId: string;
}

const Invite: React.FunctionComponent<InviteProps> = ({ inviteId }) => {
  return (
    <Layout title="Join a workshop">
      {inviteId ? (
        <AcceptInvitationFormContainer inviteId={inviteId} />
      ) : (
        <Alert severity="error">Oh no, invite ID missing in URL!</Alert>
      )}
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  return {
    props: { inviteId: query.id || null },
  };
}

export default Invite;
