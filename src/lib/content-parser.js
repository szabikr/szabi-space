import path from 'path'
import fs from 'fs'

import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

// Running remark-prism plugin for every single content parsing causes a slight performance issue
// So we have to specify it wether the conent needs syntax highlighing or not

export async function getHtmlContent(contentPath, withSyntaxHl = false) {
  const markdownFilePath = path.join(process.cwd(), 'content', contentPath)
  const markdown = fs.readFileSync(markdownFilePath, 'utf8')
  const html = await markdownToHtml(markdown, withSyntaxHl)
  return html
}

async function markdownToHtml(markdown, withSyntaxHl) {
  // TODO: change sanitize to true or see what options are outthere for making this html builder safe and secure
  const htmlBuilder = remark().use(html, { sanitize: false })

  if (withSyntaxHl) {
    htmlBuilder.use(prism, {
      transformInlineCode: true,
      plugins: ['line-numbers'],
    })
  }

  const result = await htmlBuilder.process(markdown)
  return result.toString()
}
