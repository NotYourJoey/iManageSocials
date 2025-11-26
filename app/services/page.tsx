'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Users, Megaphone, Palette, MessageSquare, Globe, Briefcase } from 'lucide-react'

const mainServices = [
  {
    icon: Users,
    title: 'Social Media Management',
    subtitle: 'Content calendars, daily posts, engagement, reporting — everything you need.',
    deliverables: ['Content strategy & planning', 'Daily post creation', 'Community engagement', 'Performance dashboards'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing & Advertising',
    subtitle: 'Targeted ads, lead generation, and customer acquisition designed for real ROI.',
    deliverables: ['Campaign strategy', 'Ad creative production', 'Audience targeting', 'Budget optimisation'],
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    subtitle: "Whether you&apos;re a startup or rebranding, we craft identities that speak volumes.",
    deliverables: ['Logo suites', 'Brand guidelines', 'Social media kits', 'Launch assets'],
  },
]

const addOns = [
  {
    icon: MessageSquare,
    title: 'Bulk SMS Campaigns',
    description: 'Reach your audience directly with targeted SMS marketing campaigns.',
  },
  {
    icon: Globe,
    title: 'Website Design & Landing Pages',
    description: 'High-converting pages built for launches, lead gen, and product drops.',
  },
  {
    icon: Briefcase,
    title: 'Business Digitalization Consulting',
    description: 'Systems, automation, and workflows for modern digital businesses.',
  },
]

const processSteps = [
  'Discover & audit your current presence',
  'Co-create strategy, content pillars, and KPIs',
  'Deploy creative, community, and campaigns',
  'Iterate weekly with transparent reporting',
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081930] via-[#0c2748] to-[#081930]" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              Our services
            </span>
            <h1 className="text-4xl font-black sm:text-5xl">What We Do Best</h1>
            <p className="text-lg text-white/80">
              Comprehensive digital marketing solutions tailored to grow your brand and drive measurable results.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Strategy', 'Content', 'Community', 'Paid Media'].map((chip) => (
                <span key={chip} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-xl">
            <h3 className="text-xl font-semibold">Our playbook</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              {processSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">Request A Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="section-wrapper">
        <div className="container space-y-12">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid gap-10 rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-xl shadow-secondary/10 lg:grid-cols-[1.2fr,0.8fr] lg:items-end"
            >
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-primary">
                  <service.icon className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">Core service</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold">{service.title}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{service.subtitle}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="rounded-2xl border border-muted bg-white px-4 py-3 text-sm font-medium text-foreground shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col rounded-[28px] bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">What this unlocks</p>
                <ul className="mt-4 space-y-3">
                  <li>• Consistent publishing without burnout</li>
                  <li>• Clear reporting and accountability</li>
                  <li>• Creative that feels on-brand and bingeable</li>
                  <li>• Optimised spend across platforms</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-wrapper bg-muted/30">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Add-on services</p>
            <h2 className="mt-4 text-4xl font-black">Plug-and-play support</h2>
            <p className="mt-3 text-muted-foreground">Mix and match the tools you need for product launches and campaigns.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {addOns.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[24px] border border-white/80 bg-white p-6 shadow-lg shadow-primary/5"
              >
                <service.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request A Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

