import type { AppProps } from 'next/app'

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '../styles/syntax-highlight/prism-one-light.css'
import '../styles/syntax-highlight/inline-code.css'

import '../styles/common/main.css'
import '../styles/common/typography.css'
import '../styles/common/grid.css'
import '../styles/common/button.css'

import '../styles/experience/accordion.css'
import '../styles/experience/tech-tag.css'

import '../styles/tagline.css'
import '../styles/projects.css'
import '../styles/expertise.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
