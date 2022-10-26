import path from 'path'
import fs from 'fs'

import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export async function getHtmlContent(contentPath) {
  const markdownFilePath = path.join(process.cwd(), 'content', contentPath)
  const markdown = fs.readFileSync(markdownFilePath, 'utf8')
  const html = await markdownToHtml(markdown)
  return html
}

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism, { transformInlineCode: true, plugins: ['line-numbers'] })
    .process(markdown)
  return result.toString()
}
