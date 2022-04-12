import { SignIn } from "@clerk/nextjs";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SignInPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box mt={isMobile ? 0 : 8}>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Box>
  );
};

export default SignInPage;
