import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Link from "next/link";

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
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-title" content="Notebook"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" type="image/jpeg" sizes="180x180"/>
          <link rel="icon" href="/icon.png" type="image/png" />
        </>
     )
  },
  logo: (
      <>
        <span style={{ fontWeight: 800 }}>
        Song / Notebook
      </span>
      </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
        // if (type === 'separator') {
        //     return (
        //         <div className="nx-w-full">{title}</div>
        //     )
        // }
        if (title === 'About') {
            return <>{title}</>
        }
        return <>{title}</>
    }
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
    link: 'https://github.com/1noob/notebook-starter-kit',
  },
  docsRepositoryBase: 'https://github.com/1noob/notebook-starter-kit',
  footer: {
    component: (
        <div className="nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-pl-[env(safe-area-inset-left)] nx-pr-[env(safe-area-inset-right]">
            <Link
                href="https://github.com/1noob/note-starter-kit"
                className="rounded-md nx-p-4 nx-tracking-tight"
            >
                <div className="nx-flex nx-items-center word-space nx-font-medium nx-gap-2 nx-p-2 nx-text-xs">
                  <span className="status-indicator nx-block">
                  </span>
                  <span>
                    Prod Nextra
                  </span>

                </div>
            </Link>
        </div>

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
