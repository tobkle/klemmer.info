import { useAmp } from "next/amp"

export const config = {
    amp: true,
}

export default function IndexPage() {
    const isAmp = useAmp()
    return (
        <>
            <amp-img
                alt="Mountains"
                width="550"
                height="368"
                layout="responsive"
                src="https://amp.dev/static/inline-examples/images/mountains.webp"
            />
        </>
    )
}
