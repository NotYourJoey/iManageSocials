'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-2xl shadow-lg supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center space-x-3">
          <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src="/logo.jpg"
              alt="iManage Socials logo"
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              We craft impact
            </span>
            <span className="text-2xl font-black leading-none text-foreground group-hover:text-primary transition-colors">
              iManage Socials
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 rounded-full bg-white/80 px-2 py-1 shadow-inner shadow-white/30 border border-white/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors border border-transparent',
                pathname === link.href
                  ? 'border-primary/40 bg-white text-primary shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="secondary" className="shadow-lg shadow-secondary/40" asChild>
            <Link href="/contact">Book Strategy Call</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/40 bg-white/95 backdrop-blur-2xl">
          <nav className="container flex flex-col space-y-3 py-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setIsOpen(false)
                }}
                className="text-left"
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-semibold transition-all',
                    pathname === link.href
                      ? 'border-primary/30 bg-white shadow-md shadow-primary/10 text-primary'
                      : 'border-transparent bg-white/30 text-muted-foreground hover:bg-white/70 hover:text-foreground'
                  )}
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Go</span>
                </Link>
              </button>
            ))}
            <Button variant="secondary" asChild className="w-full rounded-2xl shadow-lg shadow-secondary/40">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Book Strategy Call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

