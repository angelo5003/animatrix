"use client";

import { ApolloProvider } from "@apollo/client/react";
import apolloClient from "../ApolloClient/ApolloClient";

type ApolloProviderWrapperProps = {
  children: React.ReactNode;
};

const ApolloProviderWrapper = ({ children }: ApolloProviderWrapperProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
