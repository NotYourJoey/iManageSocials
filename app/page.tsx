'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Users,
  Megaphone,
  Palette,
  PlayCircle,
  Sparkles,
  MonitorSmartphone,
  HeartHandshake,
} from 'lucide-react'
import { motion } from 'framer-motion'

const heroStats = [
  { label: 'Campaigns Delivered', value: '320+' },
  { label: 'Industries Served', value: '12' },
  { label: 'Avg. Engagement Lift', value: '4.5x' },
]

const services = [
  {
    icon: Users,
    title: 'Social Media Management',
    description:
      'Daily engagement, story-driven content, and community building across every platform.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Paid Ads',
    description: 'Conversion-first ad campaigns that target, retarget, and deliver measurable ROI.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Logos, social kits, and visual systems that make your brand unforgettable.',
  },
]

const clients = [
  { name: 'Waakye Abrantie', sector: 'Restaurant' },
  { name: 'WellDone Research Consult', sector: 'Academic Consultancy' },
  { name: 'Eyewest Eyecare', sector: 'Health / Eyecare' },
  { name: 'Mobile Massage GH Spa', sector: 'Wellness' },
  { name: 'English Books & More', sector: 'Education' },
  { name: 'Modinet Engineering', sector: 'Construction' },
  { name: 'Glow Beauty Lab', sector: 'Beauty' },
  { name: 'Your Brand Here', sector: 'Next Success Story' },
]

const highlights = [
  {
    icon: Sparkles,
    title: 'Custom Content Labs',
    text: 'Short-form video, reels, motion graphics, and always-on trends.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Always-on Monitoring',
    text: 'Daily monitoring & reporting so you always see what is working.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Obsessed',
    text: 'We respond like humans, not bots—because relationships drive results.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-screen">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-creating-content-3884/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/40" />
        </div>
        <div className="container relative z-10 grid gap-8 py-16 md:gap-12 md:py-32 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              <Sparkles className="h-4 w-4" /> Social-first agency
            </div>
            <h1 className="mt-4 text-3xl font-black text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Social Media That Moves Brands Forward
            </h1>
            <p className="mt-4 text-base text-white/80 sm:mt-6 sm:text-lg md:text-xl">
              At iManage Socials, we create stories, build communities, and grow brands through strategic digital marketing.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Button size="lg" className="text-sm shadow-2xl shadow-primary/40 sm:text-base" asChild>
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/15 text-white hover:bg-white/25 text-sm sm:text-base" asChild>
                <Link href="/contact">
                  Get A Free Consultation
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-white backdrop-blur"
                >
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden space-y-5 rounded-3xl bg-white/10 p-6 text-white backdrop-blur-2xl md:block md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Featured Case Study</p>
            <h3 className="text-2xl font-bold leading-tight">
              7x engagement growth for a Ghanaian health brand in 90 days.
            </h3>
            <p className="text-white/80">
              Creative reels, community storytelling, and paid ads that converted followers into bookings.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm text-white/60">Platforms</p>
                <p className="text-lg font-semibold">Instagram, TikTok</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm text-white/60">Growth</p>
                <p className="text-lg font-semibold">+230% reach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-wrapper">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">About Us</p>
            <h2 className="text-4xl font-black leading-tight text-foreground">
              We&apos;re a dynamic, full-service social media and digital marketing agency on a mission to connect
              businesses to their biggest opportunities — online.
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to content creation, we make brands unmissable with playful storytelling, purposeful design, and
              performance reporting you can brag about.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-secondary/20 bg-white/70 px-5 py-4 shadow-lg">
                <p className="text-3xl font-black text-secondary">05</p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Core team members</p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-white/70 px-5 py-4 shadow-lg">
                <p className="text-3xl font-black text-primary">24/7</p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Community monitoring</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="gradient-card rounded-[32px] p-8">
              <div className="grid gap-6">
                {highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl bg-white/85 p-5 shadow-lg">
                    <div className="flex items-center gap-3 text-primary">
                      <highlight.icon className="h-6 w-6" />
                      <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg shadow-secondary/40 md:flex font-black text-xl" />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-wrapper bg-gradient-to-b from-white to-[#fff4ea]">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our services</p>
            <h2 className="mt-4 text-4xl font-black">What We Do For Brands</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              From brainstorming to reporting, we manage every touchpoint with playful creativity and serious performance.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[28px] border border-white/60 bg-white p-8 shadow-xl shadow-secondary/10 transition hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <Link href="/services" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  See how it works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" variant="secondary" className="shadow-lg shadow-secondary/30" asChild>
              <Link href="/services">
                See All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="section-wrapper">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Featured clients</p>
            <h2 className="mt-4 text-4xl font-black">Brands We&apos;ve Grown With</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl bg-white p-6 text-center shadow-xl shadow-primary/5 transition hover:-translate-y-2 hover:shadow-primary/20"
              >
                <div className="h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-lg font-semibold text-foreground">
                  {client.name}
                </div>
                <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">{client.sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wrapper relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(26,177,206,0.2),_transparent_65%)]" />
        <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl opacity-10">
          <span className="mx-4 animate-bounce delay-200">💡</span>
          <span className="mx-4 animate-bounce delay-300">✨</span>
          <span className="mx-4 animate-bounce" style={{ animationDelay: '450ms' }}>
            🎯
          </span>
        </div>
        <div className="container relative z-10 rounded-[40px] bg-gradient-to-r from-primary to-secondary px-10 py-16 text-white shadow-2xl">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Let&apos;s collaborate</p>
              <h2 className="mt-4 text-4xl font-black">
                Your Audience Is Online. Let&apos;s Find Them Together.
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Book a strategy call and walk away with a tailored roadmap for content, campaigns, and community.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-transparent border border-white/60 hover:bg-white/10" asChild>
                <Link href="/services">See Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

