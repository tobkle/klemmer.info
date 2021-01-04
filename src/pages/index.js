import Layout from "components/Layout"

export const config = { amp: true }

export default function IndexPage(props) {
    return (
        <Layout title="Home" description="Klemmer Blog">
            <main className="mx-auto max-w-3xl">
                <h1 className="text-indigo-500 text-2xl font-semibold my-3">
                    klemmer.info
                </h1>
                <section></section>
            </main>
        </Layout>
    )
}
