import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import stylesheet from './styles/tailwind.css'
import Footer from './components/Footer'
import faviconUrl from './assets/images/favicon-32x32.png'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Kumbh+Sans:wght@400;700&display=swap',
  },
  { rel: 'icon', href: faviconUrl },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="font-kumbh-sans bg-dark-cyan flex h-screen flex-col items-center justify-center bg-[url('/images/bg-pattern-top.svg'),_url('/images/bg-pattern-bottom.svg')] bg-contain bg-[position:_right_53vw_bottom_75vh,_left_51vw_top_50vh] bg-no-repeat lg:bg-[position:_right_49vw_bottom_70vh,_left_51vw_top_50vh]">
        <Outlet />
        <Footer className="m-4 mt-auto" />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
