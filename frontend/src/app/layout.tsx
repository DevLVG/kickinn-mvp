import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'KickInn - Where Ideas Kick In',
  description: 'A decentralized platform where innovators and experts connect to bring groundbreaking ideas to life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-secondary text-text-main font-sans">
        {children}
      </body>
    </html>
  )
} 