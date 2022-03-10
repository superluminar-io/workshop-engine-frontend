import '../styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { SignIn } from '@clerk/nextjs'
import Header from '../components/Header'

/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ['/sign-in/[[...index]]']

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
  return (
    <ClerkProvider>
      <Layout>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </Layout>
    </ClerkProvider>
  )
}

export default MyApp
