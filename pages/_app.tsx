import Head from "next/head";
import { SignIn, ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/config/theme";
import { UserContextContainer } from "../src/containers/UserContextContainer/UserContextContainer";
import { ApolloProviderContainer } from "../src/containers/ApolloProviderContainer/ApolloProviderContainer";

import "@fontsource/source-sans-pro";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ClerkProvider {...pageProps}>
      <CssBaseline />
      <Head>
        <title>superluminar workshops</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main>
        <SignedIn>
          <ApolloProviderContainer>
            <UserContextContainer>
              <Component {...pageProps} />
            </UserContextContainer>
          </ApolloProviderContainer>
        </SignedIn>
        <SignedOut>
          <Box mt={12}>
            <SignIn />
          </Box>
        </SignedOut>
      </main>
    </ClerkProvider>
  </ThemeProvider>
);

export default App;
