import { initializeApollo, addApolloState } from "lib/apollo-client"
import { gql, useQuery, NetworkStatus } from "@apollo/client"

export default function ApolloPage(props) {
    console.log(props)
    return <>Apollo</>
}

export const GET_LAUNCHES = gql`
    query GetLaunchList($after: String) {
        launches(after: $after) {
            cursor
            hasMore
            launches {
                id
            }
        }
    }
`

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: GET_LAUNCHES,
        variables: {
            after: "",
        },
    })

    return addApolloState(apolloClient, {
        props: {},
        revalidate: 1,
    })
}
