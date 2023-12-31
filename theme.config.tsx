import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://note.jackey.love' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'Notebook'} />
          <meta
              property="og:description"
              content={frontMatter.description || 'My Notebook'}
          />
          <meta name="apple-mobile-web-app-title" content="Notebook"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
          <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" type="image/jpeg" sizes="180x180"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/icon.png" type="image/png" />
        </>
     )
  },
  logo: (
      <div className="nx-flex nx-items-center nx-gap-2">
        <span className="status-indicator nx-block">
        </span>
        <span style={{ fontWeight: 800 }}>
        song/notebook
        </span>
      </div>
  ),
  sidebar: {

  },
  toc: {
    backToTop: true
  },
  search: {
    placeholder: 'Search Notebook'
  },
  feedback: {
    content: 'Question? Post issue'
  },
  navigation: {
    prev: false,
    next: false
  },
  project: {
    link: 'https://github.com/1noob/next-notebook',
  },
  docsRepositoryBase: 'https://github.com/1noob/next-notebook',
  footer: {
    component: (
        <></>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Notebook'
      }
    }
  }
}

export default config
