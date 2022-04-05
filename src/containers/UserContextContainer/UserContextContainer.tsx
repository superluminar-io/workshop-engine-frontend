import React from "react";
import { Typography } from "@mui/material";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { GlobalCircularProgress } from "../../components/GlobalCircularProgress/GlobalCircularProgress";
import { useUserQuery } from "./UserContextContainer.generated";

export const UserContextContainer: React.FunctionComponent = ({ children }) => {
  const { loading, error, data } = useUserQuery();

  if (loading) {
    return <GlobalCircularProgress />;
  }

  if (error || !data) {
    console.log(error);
    return <Typography variant="body1">Something went wrong!</Typography>;
  }

  return (
    <UserContext.Provider value={data.me}>
      <>{children}</>
    </UserContext.Provider>
  );
};
