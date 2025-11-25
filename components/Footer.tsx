import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const socials = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://facebook.com', label: 'Facebook' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://tiktok.com', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-b from-[#0b1f34] via-[#04101f] to-[#01060c] text-white">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(26, 177, 206, 0.5), transparent 45%)' }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 0%, rgba(255, 120, 63, 0.5), transparent 35%)' }} />
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[2fr,1fr,1fr,1.2fr]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="iManage Socials logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <h3 className="text-3xl font-black tracking-tight">iManage Socials</h3>
            </div>
            <p className="text-base text-white/70 max-w-sm">
              Social media that moves brands forward. We create stories, build communities, and turn
              scrolls into conversions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/30 backdrop-blur transition hover:bg-white/20"
            >
              Book A Strategy Call →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {['/about', '/services', '/portfolio', '/contact'].map((path) => {
                const label = path.replace('/', '')
                return (
                  <li key={path}>
                    <Link href={path} className="hover:text-white transition-colors">
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Social Media Management</li>
              <li>Marketing & Ads</li>
              <li>Branding & Identity</li>
              <li>Digital Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <a href="mailto:info@imanagesocisals.com" className="hover:text-white">
                  info@imanagesocisals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <a href="tel:+233546823776" className="hover:text-white">
                  +233 546 823 776
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-secondary" />
                <a
                  href="https://wa.me/233546823776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: Click to Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/70">
          <p>© {new Date().getFullYear()} iManage Socials. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

