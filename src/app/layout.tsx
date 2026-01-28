import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'OKTEND — Software Development Team',
  description: 'Custom software development: web, mobile, and desktop applications. From idea to production.',
  keywords: 'software development, web applications, mobile apps, custom software, development team',
  openGraph: {
    title: 'OKTEND — Software Development Team',
    description: 'Custom software development: web, mobile, and desktop applications. From idea to production.',
    type: 'website',
    url: 'https://oktend.com',
  },
  icons: {
    icon: '/img/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/animations.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
