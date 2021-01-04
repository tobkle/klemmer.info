import Document, { Html, Head, Main, NextScript } from "next/document"
import outputcss from "!raw-loader!../styles/output.css"
import tailwindcss from "!raw-loader!../styles/tailwind.min.css"
const cssFile = process.env.NODE_ENV === "production" ? outputcss : tailwindcss

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: cssFile,
                        }}
                    />
                    {initialProps.styles}
                </>
            ),
        }
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
