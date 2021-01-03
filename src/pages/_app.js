import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                />

                <meta name="description" content="Blog von Tobias Klemmer" />
                <meta name="keywords" content="Blog, Tech, Learn" />
                <title>klemmer.info</title>

                <link rel="manifest" href="/manifest.json" />

                <link rel="apple-touch-icon" href="/apple-icon.png"></link>

                <meta name="robots" content="all"></meta>
                <meta name="theme-color" content="#4F46E5" />

                <meta name="application-name" content="klemmer.info" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="klemmer.info"
                />
                <meta name="description" content="Blog Tobias Klemmer" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta name="msapplication-TileColor" content="#4F46E5" />
                <meta name="msapplication-tap-highlight" content="no" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-icon-180x180.jpg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/icons/favicon-96x96.jpg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.jpg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.jpg"
                />
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#4F46E5"
                />
                <link rel="shortcut icon" href="/favicon.ico" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://klemmer.info" />
                <meta name="twitter:title" content="klemmer.info" />
                <meta
                    name="twitter:description"
                    content="Blog Tobias Klemmer"
                />
                <meta
                    name="twitter:image"
                    content="https://klemmer.info/icons/android-icon-192x192.jpg"
                />
                <meta name="twitter:creator" content="@tobiasklemmer" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="klemmer.info" />
                <meta property="og:description" content="Blog Tobias Klemmer" />
                <meta property="og:site_name" content="klemmer.info" />
                <meta property="og:url" content="https://klemmer.info" />
                <meta
                    property="og:image"
                    content="https://klemmer.info/icons/apple-touch-icon.jpg"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
