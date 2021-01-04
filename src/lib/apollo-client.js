import { useMemo } from "react"
import { ApolloClient, HttpLink } from "@apollo/client"
import cache from "./cache"

let apolloClient

function createApolloClient() {
    return new ApolloClient({
        cache,
        ssrMode: typeof window === "undefined",
        connectToDevTools: true,
        link: new HttpLink({
            uri: "http://localhost:4000",
            credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
        }),
    })
}

export function initializeApollo(initialState = null) {
    // eslint-disable-next-line no-underscore-dangle
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()
        // Restore the cache using the data passed from getStaticProps/getServerSideProps
        // combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState })
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}
