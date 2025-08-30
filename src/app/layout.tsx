import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Дмитрий Савичев - SRE Engineer Middle',
  description: 'Резюме SRE Engineer с опытом работы в DevOps, мониторинге и автоматизации',
  keywords: 'SRE, DevOps, Docker, Kubernetes, Linux, PostgreSQL, Grafana, Prometheus',
  authors: [{ name: 'Дмитрий Савичев' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}