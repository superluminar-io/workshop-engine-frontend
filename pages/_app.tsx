import Head from "next/head";
import { SignIn, ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../config/theme";

import "@fontsource/source-sans-pro";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ClerkProvider>
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
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  </ThemeProvider>
);

export default App;
