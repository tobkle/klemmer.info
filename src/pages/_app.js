import { ApolloProvider } from "@apollo/client"
import { useApollo } from "lib/apollo-client"

export default function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps)
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
