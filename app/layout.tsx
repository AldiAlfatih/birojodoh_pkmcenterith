import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Biro Jodoh PKM 2026 - PKM CENTER ITH',
  description: 'Temukan rekan kolaborasi terbaik dari berbagai disiplin ilmu di Institut Teknologi Bacharuddin Jusuf Habibie untuk program PKM 2026.',
  icons: {
    icon: '/pkm-logo.png',
    apple: '/pkm-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
