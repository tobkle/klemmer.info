import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LegalFrontMatter } from 'types/LegalFrontMatter'

const DEFAULT_LAYOUT = 'AuthorLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  impressum: { mdxSource: string; frontMatter: LegalFrontMatter }
}> = async () => {
  const impressum = await getFileBySlug<LegalFrontMatter>('legal', ['datenschutz'])
  const { mdxSource, frontMatter } = impressum
  return { props: { impressum: { mdxSource, frontMatter } } }
}

export default function ImpressumPage({
  impressum,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = impressum

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
