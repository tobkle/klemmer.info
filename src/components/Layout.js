import NextHead from "next/head"
import PropTypes from "prop-types"
import { AmpIncludeAmpInstallServiceworker } from "./amp/AmpCustomElement"
import config from "config"

/**
 * A sample page layout installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
const Layout = (props) => (
    <>
        <NextHead>
            <meta charSet="utf-8" />

            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            {/* <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1"
            /> */}

            <title>
                {props.title
                    ? props.title + " | " + config.siteName
                    : config.siteName}
            </title>

            <meta
                name="description"
                content={props.description || config.description}
            />

            <meta name="keywords" content={config.keywords} />

            <meta name="robots" content={config.robots} />

            <meta name="theme-color" content={config.themeColor} />

            <meta name="application-name" content={config.applicationName} />

            <meta name="apple-mobile-web-app-capable" content="yes" />

            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />

            <meta
                name="apple-mobile-web-app-title"
                content={config.applicationName}
            />

            <meta name="format-detection" content="telephone=no" />

            <meta name="mobile-web-app-capable" content="yes" />

            <meta
                name="msapplication-config"
                content="/static/icons/browserconfig.xml"
            />

            <meta name="msapplication-TileColor" content={config.themeColor} />

            <meta name="msapplication-tap-highlight" content="no" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={config.siteUrl} />
            <meta name="twitter:title" content={config.siteName} />
            <meta name="twitter:description" content={config.description} />
            <meta name="twitter:creator" content={config.twitterCreator} />
            <meta
                name="twitter:image"
                content={`${config.siteUrl}/static/icons/icon-192x192.png`}
            />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={config.siteName} />
            <meta property="og:description" content={config.description} />
            <meta property="og:site_name" content={config.applicationName} />
            <meta property="og:url" content={config.siteUrl} />
            <meta
                property="og:image"
                content={`${config.siteUrl}/static/icons/icon-512x512.png`}
            />

            <link rel="canonical" href={config.siteUrl} />

            <link
                rel="icon"
                sizes="192x192"
                href="/static/icons/icon-192x192.png"
            />

            <link
                rel="apple-touch-icon"
                href="/static/icons/icon-192x192.png"
            />

            <link rel="icon" href="/static/favicon.ico" />

            <link rel="shortcut icon" href="/static/favicon.ico" />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/icons/icon-180x180.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/static/icons/icon-96x96.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/icons/icon-32x32.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/icons/icon-16x16.png"
            />

            <link
                rel="mask-icon"
                href="/static/icons/safari-pinned-tab.svg"
                color="#4F46E5"
            />

            <link rel="manifest" href="/manifest.json" />
        </NextHead>

        {props.children}

        <AmpIncludeAmpInstallServiceworker />

        <amp-install-serviceworker
            src="/serviceworker.js"
            data-iframe-src="/install-serviceworker.html"
            layout="nodisplay"
        />

        <style jsx global>{`
            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
                    "Segoe UI Emoji", "Segoe UI Symbol";
                min-height: 100vh;
                scroll-behavior: smooth;
                text-rendering: optimizeSpeed;
                line-height: 1.5;
            }
        `}</style>
    </>
)

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Layout
