import { GetStaticProps } from 'next'
import { getHtmlContent } from '../../lib/content-parser'

export default function RefactoringUserInputImporterV1({
  refactoringV1ContentHtml,
}) {
  return (
    <main>
      <section dangerouslySetInnerHTML={{ __html: refactoringV1ContentHtml }} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const withSyntaxHl = true
  const refactoringV1ContentHtml = await getHtmlContent(
    'projects/habit-tracker/refactoring-user-input-importer-v1.md',
    withSyntaxHl,
  )

  return {
    props: {
      refactoringV1ContentHtml,
    },
  }
}
