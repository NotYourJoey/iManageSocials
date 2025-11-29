import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'iManage Socials - Social Media That Moves Brands Forward',
  description: 'At iManage Socials, we create stories, build communities, and grow brands through strategic digital marketing.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-background text-foreground">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-secondary/20 blur-[120px]" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

