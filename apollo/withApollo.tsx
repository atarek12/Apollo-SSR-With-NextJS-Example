import { getDisplayName } from "next/dist/shared/lib/utils";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import type { ModifiedAppType } from "./types";

const isServer = typeof window === "undefined";
let globalApolloClient: ApolloClient<NormalizedCacheObject>;

function initApollo(apolloState: NormalizedCacheObject = {}) {
  if (globalApolloClient && !isServer) return globalApolloClient;
  globalApolloClient = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    ssrMode: isServer,
    cache: new InMemoryCache()?.restore(apolloState),
  });
  return globalApolloClient;
}

export function withApollo(WrappedApp: ModifiedAppType) {
  const WithApollo: ModifiedAppType = (props) => {
    const { apolloSSRClient, apolloState } = props;
    const client = initApollo(apolloState);
    return (
      <ApolloProvider client={apolloSSRClient || client}>
        <WrappedApp {...props} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (context) => {
    const { AppTree } = context;
    const appProps = await WrappedApp?.getInitialProps?.(context);
    const apolloClient = initApollo();
    if (isServer) {
      try {
        await getDataFromTree(
          <AppTree {...appProps!} apolloSSRClient={apolloClient} />
        );
      } catch (error) {
        console.error("Error while running `getDataFromTree`", error);
      }
    }
    const apolloState = apolloClient.cache.extract();
    return { ...appProps!, apolloState };
  };

  WithApollo.displayName = `withApollo((${getDisplayName(WrappedApp)})`;
  return WithApollo;
}
