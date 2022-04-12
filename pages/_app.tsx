import Head from "next/head";
import redirect from "nextjs-redirect";
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/config/theme";
import { UserContextContainer } from "../src/containers/UserContextContainer/UserContextContainer";
import { ApolloProviderContainer } from "../src/containers/ApolloProviderContainer/ApolloProviderContainer";

import "@fontsource/source-sans-pro";

const Redirect = redirect("/sign-in");
const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
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
          {publicPages.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <>
              <SignedIn>
                <ApolloProviderContainer>
                  <UserContextContainer>
                    <Component {...pageProps} />
                  </UserContextContainer>
                </ApolloProviderContainer>
              </SignedIn>
              <SignedOut>
                <Redirect>
                  <span />
                </Redirect>
              </SignedOut>
            </>
          )}
        </main>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default App;
