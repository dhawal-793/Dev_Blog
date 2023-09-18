import { Inter as FontSans } from 'next/font/google'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/siteConfig'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
