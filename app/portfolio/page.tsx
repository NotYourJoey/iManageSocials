'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon, Instagram, Palette, BarChart, Sparkles } from 'lucide-react'

const portfolioCategories = [
  {
    title: 'Logo & Identity Systems',
    icon: Palette,
    items: ['Eyewest Eyecare Visual ID', 'Modinet Engineering Rebrand', 'Glow Beauty Lab Launch', 'English Books & More Re-imagined'],
  },
  {
    title: 'Instagram Before / After',
    icon: Instagram,
    items: ['Restaurant storytelling', 'Wellness glow-up', 'Research brand refresh', 'Education carousel series'],
  },
  {
    title: 'Campaign Snapshots',
    icon: BarChart,
    items: ['Health lead-gen ads', 'Spa booking blitz', 'Retail product drops', 'Edtech live class launch'],
  },
]

const results = [
  { metric: '7x', label: 'Engagement lift', detail: 'Spa & wellness brand in 90 days' },
  { metric: '230%', label: 'Reach growth', detail: 'Health care client after reels + ads' },
  { metric: '120+', label: 'Assets launched', detail: 'Logos, guides, reels & ads' },
]

const testimonials = [
  {
    quote:
      'iManage Socials transformed our online presence. Our engagement has tripled since working with them!',
    author: 'Sarah Mensah',
    company: 'Waakye Abrantie',
  },
  {
    quote:
      'Professional, creative, and results-driven. They understand our brand and deliver consistently.',
    author: 'Dr. Kwame Asante',
    company: 'WellDone Research Consult',
  },
  {
    quote:
      'The best investment we made for our business. Our social media growth has been incredible.',
    author: 'Ama Osei',
    company: 'Eyewest Eyecare',
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08142a] via-[#0d2140] to-[#08142a]" />
        <div className="container relative z-10 text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
            <Sparkles className="h-4 w-4 text-secondary" /> Portfolio
          </div>
          <h1 className="text-4xl font-black sm:text-5xl">Our Work Speaks Louder</h1>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Scroll through the social media labs, identity refreshes, and campaign sprints that moved the metrics for our clients.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {results.map((result) => (
              <div key={result.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-left">
                <p className="text-3xl font-black text-secondary">{result.metric}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">{result.label}</p>
                <p className="mt-2 text-sm text-white/70">{result.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-wrapper">
        <div className="container space-y-16">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <category.icon className="h-10 w-10 rounded-2xl bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-secondary">Gallery</p>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                    className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-xl shadow-primary/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="absolute inset-4 rounded-[24px] border border-dashed border-white/60 bg-white/70 p-4 flex flex-col justify-between">
                      <ImageIcon className="h-12 w-12 text-primary/40" />
                      <p className="text-lg font-semibold text-foreground">{item}</p>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Preview</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-4 text-center text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="font-semibold">Tap to view case study</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-wrapper bg-muted/30">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">Testimonials</p>
          <h2 className="mt-4 text-4xl font-black">What Our Clients Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[28px] border border-white/80 bg-white p-6 text-left shadow-lg shadow-secondary/10"
              >
                <p className="text-lg font-semibold text-primary">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 border-t pt-4 text-left">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

