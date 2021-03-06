import Layout from "components/Layout"
import AmpState from "components/amp/AmpState"
import AmpScript from "components/amp/AmpScript"
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from "components/amp/AmpCustomElement"

export const config = { amp: true }

const Home = (props) => (
    <>
        <Layout
            title="Welcome to AMP"
            description="Learn how to build an AMP First with Next.js."
        >
            <main className="mx-auto max-w-3xl">
                <h1 className="text-indigo-500 text-2xl font-semibold my-3">
                    klemmer.info
                </h1>

                <section>
                    <h2>Using AMP Components</h2>

                    <AmpIncludeAmpCarousel />

                    <amp-carousel
                        type="slides"
                        width="800"
                        height="300"
                        layout="responsive"
                    >
                        <amp-img
                            src="https://unsplash.it/800/300?id=123"
                            layout="fill"
                            alt="demo image"
                        />
                        <amp-img
                            src="https://unsplash.it/800/300?id=124"
                            layout="fill"
                            alt="demo image"
                        />
                        <amp-img
                            src="https://unsplash.it/800/300?id=125"
                            layout="fill"
                            alt="demo image"
                        />
                    </amp-carousel>
                </section>

                <section>
                    <h2>amp-bind & amp-state</h2>
                    <p>
                        It's no problem to use <code>amp-bind</code> and{" "}
                        <code>amp-state</code> with Next.js. There are two
                        things to be aware of:
                        <ol>
                            <li>
                                The <code>[...]</code> binding syntax{" "}
                                <code>[text]="myStateVariable"</code>is not
                                supported in JSX. Use{" "}
                                <code>
                                    data-amp-bind-text="myStateVariable"
                                </code>{" "}
                                instead.
                            </li>
                            <li>
                                Initializing <code>amp-state</code> via JSON
                                string is not supported in JSX:
                                <pre>{`<amp-state id="myState">
  <script type="application/json">
    {
      "message": "Hello World"
    }
  </script>
</amp-state>`}</pre>
                                Instead you need to use{" "}
                                <code>dangerouslySetInnerHTML</code> to
                                initialize the string. can use the{" "}
                                <code>/components/amp/AmpState.js</code>{" "}
                                component to see how it works. The same approach
                                works for <code>amp-access</code> and{" "}
                                <code>amp-consent</code> as well
                            </li>
                        </ol>
                        Demo:
                    </p>

                    <AmpState id="myState">
                        {{
                            message: "Hello World",
                        }}
                    </AmpState>
                    <button
                        on="tap:AMP.setState({
           greeting: myState.message
         })"
                    >
                        Click
                    </button>
                    <span data-amp-bind-text="greeting" />
                </section>

                <section>
                    <h2>amp-list & amp-mustache</h2>
                    <p>
                        Mustache templates conflict with JSX and it's template
                        literals need to be escaped. A simple approach is to
                        escape them via back ticks:{" "}
                        <code>
                            src=&#123;`&#123;&#123;imageUrl&#125;&#125;`&#125;
                        </code>
                        .
                    </p>

                    <AmpIncludeAmpList />
                    <amp-list
                        src="https://amp.dev/documentation/examples/api/photo-stream"
                        layout="fixed-height"
                        height="64"
                        binding="no"
                    >
                        <template type="amp-mustache">
                            <amp-img
                                src={`{{imageUrl}}`}
                                width="64"
                                height="64"
                                alt="demo image"
                            />
                        </template>
                    </amp-list>
                </section>

                <section>
                    <h2>amp-script</h2>
                    <p>
                        Checkout the{" "}
                        <a href="https://amp.dev/documentation/components/amp-script/">
                            amp-script
                        </a>{" "}
                        helper here: <code>components/amp/AmpScript.js</code>{" "}
                        for embedding custom JavaScript.
                    </p>

                    <AmpScript
                        layout="container"
                        src={`${props.host}/static/amp-script/hello.js`}
                    >
                        <button>Hello amp-script!</button>
                    </AmpScript>

                    <p>
                        The helper also supports embedding inline scripts. Good
                        to know: Next.js uses{" "}
                        <a href="https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer">
                            AMP Optimizer
                        </a>{" "}
                        under the hood, which automatically adds the needed
                        script hashes for{" "}
                        <a href="https://amp.dev/documentation/components/amp-script/#load-javascript-from-a-local-element">
                            inline amp-scripts
                        </a>
                        .
                    </p>
                    <AmpScript
                        id="hello-world"
                        layout="fixed-height"
                        height="64"
                        script="
              const btn = document.querySelector('button');
              btn.addEventListener('click', () => {
                document.body.textContent = 'Hello World!'
              })"
                    >
                        <button>Hello amp-script!</button>
                    </AmpScript>
                </section>
            </main>
        </Layout>
    </>
)

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
    // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
    // Be sure your load balancer is configured to not allow spoofed host headers.
    return { props: { host: `${getProtocol(req)}://${req.headers.host}` } }
}

function getProtocol(req) {
    if (req.connection.encrypted) {
        return "https"
    }
    const forwardedProto = req.headers["x-forwarded-proto"]
    if (forwardedProto) {
        return forwardedProto.split(/\s*,\s*/)[0]
    }
    return "http"
}

export default Home
