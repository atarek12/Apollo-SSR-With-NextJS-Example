import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { AppProps } from "next/app";
import { AppContextType } from "next/dist/shared/lib/utils";
import { ComponentType } from "react";

type ModifiedAppProps = AppProps & {
  apolloState: NormalizedCacheObject;
  apolloSSRClient: ApolloClient<NormalizedCacheObject>;
};

export type ModifiedAppType = ComponentType<ModifiedAppProps> & {
  getInitialProps?(
    context: AppContextType
  ): ModifiedAppProps | Promise<ModifiedAppProps>;
};
