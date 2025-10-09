import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
  // Use server env var if present, otherwise default to our server route
  link: new HttpLink({ uri: "/api/anilist" }),
  cache: new InMemoryCache(),
});

export default apolloClient;
