import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.anilist.co`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider client={client}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
