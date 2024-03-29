import { ApolloProvider } from "@apollo/client";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useSession } from "@clerk/nextjs";
import { useMemo } from "react";

export const ApolloProviderContainer: React.FunctionComponent = ({
  children,
}) => {
  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_APPSYNC_URL,
    });

    const authLink = setContext(async (_, { headers }) => ({
      headers: {
        ...headers,
        authorization: 'public',
      },
    }));

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const ApolloProviderWithSessionContainer: React.FunctionComponent = ({
  children,
}) => {
  const { session } = useSession();

  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_APPSYNC_URL,
    });

    const authLink = setContext(async (_, { headers }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${await session.getToken()}`,
      },
    }));

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
