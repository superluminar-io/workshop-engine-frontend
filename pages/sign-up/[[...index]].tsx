import { SignUp } from "@clerk/nextjs";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SignUpPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box mt={isMobile ? 0 : 8}>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Box>
  );
};

export default SignUpPage;
