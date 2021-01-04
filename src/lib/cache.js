import { InMemoryCache, makeVar } from "@apollo/client"
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist"
//https://github.com/apollographql/apollo-cache-persist/issues/32
//github.com/apollographql/apollo-cache-persist

// Create reactive variables (not persisted by apollo-cache-persist)
export const isLoggedInVar = makeVar(
    process.browser ? !!localStorage.getItem("token") : false
)

// Create Cache
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar()
                    },
                },
            },
        },
    },
})

// persist cache in localstorage of client
if (typeof window !== "undefined") {
    try {
        // See above for additional options, including other storage providers.
        const persistNow = async () =>
            await persistCache({
                cache,
                storage: new LocalStorageWrapper(window.localStorage),
            })
        persistNow()
    } catch (error) {
        console.error("Error restoring Apollo cache", error)
    }
}

export default cache
