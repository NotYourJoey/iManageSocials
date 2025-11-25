'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Camera,
  Globe,
  Heart,
  Palette,
  Target,
  Users,
  Zap,
} from 'lucide-react'

const values = [
  { icon: Zap, title: 'Creativity', description: 'Always different, always impactful.' },
  { icon: Users, title: 'Collaboration', description: 'We grow with you.' },
  { icon: Heart, title: 'Passion', description: 'Digital marketing is our playground.' },
  { icon: Target, title: 'Results', description: 'Growth you can measure.' },
]

const stats = [
  { label: 'Team members', value: '05', detail: 'Strategists, creators, analysts' },
  { label: 'Industries', value: '12+', detail: 'Food, health, education & more' },
  { label: 'Avg. ROI', value: '4.5x', detail: 'Measured across campaigns' },
]

const cultureHighlights = [
  {
    icon: Palette,
    title: 'Culture of Craft',
    body: 'Our content sprints mix strategy with playful experimentation so every brand touchpoint feels human.',
  },
  {
    icon: Camera,
    title: 'Story-first Production',
    body: 'On-set, on-location, or remote—we capture the energy of your team and turn it into scroll-stopping loops.',
  },
]

const expertise = [
  { title: 'Social Playbooks', detail: 'Tone, visuals, and messaging that keep every post consistent.' },
  { title: 'Platform Labs', detail: 'We prototype on TikTok, IG, Threads, LinkedIn, and emerging channels.' },
  { title: 'Performance Ops', detail: 'Daily dashboards with smart alerts for spend, reach, and sentiment.' },
]

const timeline = [
  {
    year: '2020',
    title: 'iManage Socials Founded',
    description: 'Started with a vision to transform how brands connect online.',
  },
  {
    year: '2024',
    title: 'Expanded Reach',
    description: 'Scaled to work with brands across multiple industries and continents.',
  },
  {
    year: '2025',
    title: 'Global Rebrand',
    description: 'Rebranded to iManage Socials to better serve globally.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f34] via-[#0f2f4c] to-[#0a1f34]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,214,0,.5), transparent 55%)' }}
        />
        <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              <BadgeCheck className="h-4 w-4 text-secondary" /> About Us
            </span>
            <h1 className="text-4xl font-black sm:text-5xl">Meet iManage Socials</h1>
            <p className="text-lg text-white/80">
              Formerly known as iManage Socials Gh, we&apos;re reimagining how brands show up online. With a passionate,
              agile 5-member team, we blend creativity, strategy, and results-driven marketing. Our dream is simple: help
              brands across continents spark unforgettable connections through digital platforms.
            </p>
            <p className="text-xl font-semibold text-secondary">
              We don&apos;t just manage socials — we build digital experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/70">
              <Globe className="h-5 w-5 text-secondary" />
              Global-ready
            </div>
            <p className="mt-4 text-3xl font-bold leading-tight">
              Social-first storytellers shaping brands across Africa and beyond.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="rounded-2xl border border-white/20 bg-white/5 p-4 text-center"
                >
                  <p className="text-2xl font-black text-secondary">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
                  <p className="mt-1 text-xs text-white/60">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-wrapper bg-muted/30">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our mission</p>
            <h2 className="mt-4 text-4xl font-black text-foreground">We craft brands people root for.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From launch playbooks to evergreen social ops, we operate like an embedded team—bringing modern aesthetics,
              measurable growth, and community obsession to every campaign.
            </p>
            <div className="mt-8 space-y-5">
              {cultureHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/70 bg-white p-6 shadow-lg shadow-secondary/10"
                >
                  <item.icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-dashed border-primary/30 bg-white/80 p-8 shadow-xl shadow-primary/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What we obsess over</p>
            <ul className="mt-6 space-y-4">
              {expertise.map((item) => (
                <li key={item.title} className="rounded-2xl bg-muted/50 p-4">
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-wrapper">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our DNA</p>
            <h2 className="mt-4 text-4xl font-black">Values That Guide Every Campaign</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[28px] border border-white/70 bg-white p-6 text-center shadow-lg shadow-secondary/10"
              >
                <value.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-wrapper bg-muted/30">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our Story</p>
            <h2 className="mt-4 text-4xl font-black">Milestones That Matter</h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-6 pl-10"
              >
                <div className="absolute left-0 top-2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />
                <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary" />
                <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/5">
                  <div className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">{item.year}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

