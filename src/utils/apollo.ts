import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useSession } from '@clerk/nextjs';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_APPSYNC_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const { session: { getToken } } = useSession();
  const token = await getToken();
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
