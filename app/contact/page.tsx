'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MessageCircle, MapPin, CalendarDays } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  companyName: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const services = [
  'Social Media Management',
  'Social Media Marketing & Ads',
  'Branding & Identity',
  'Bulk SMS Campaigns',
  'Website Design & Landing Pages',
  'Business Digitalization Consulting',
  'Other',
]

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@imanagesocials.com',
    href: 'mailto:info@imanagesocisals.com',
    description: 'We reply within 24 hrs',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+233 546 823 776',
    href: 'tel:+233546823776',
    description: 'Mon-Fri · 9am - 6pm GMT',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Click to Chat',
    href: 'https://wa.me/233546823776',
    description: 'Quick project check-ins',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Accra, Ghana',
    description: 'Serving clients worldwide',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitSuccess(true)
    setIsSubmitting(false)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06142a] via-[#0c2442] to-[#06142a]" />
        <div className="container relative z-10 grid gap-10 text-white lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
              Let&apos;s talk
            </span>
            <h1 className="text-4xl font-black sm:text-5xl">Ready To Start?</h1>
            <p className="text-lg text-white/80">
              Share your brief, book a call, or drop us your wildest idea. We&apos;ll respond with a roadmap tailored to
              your brand, platforms, and performance goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4">
                <p className="text-2xl font-black text-secondary">48h</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Proposal turnaround</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4">
                <p className="text-2xl font-black text-secondary">24/7</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Community support</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/70">
              <CalendarDays className="h-5 w-5 text-secondary" />
              Calendly-ready
            </div>
            <p className="mt-4 text-2xl font-semibold">
              Book a 30-min strategy call to review your current content and growth opportunities.
            </p>
            <Button variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90" asChild>
              <a href="mailto:info@imanagesocisals.com?subject=Strategy%20Call">Book via email</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-wrapper">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-[32px] border border-white/70 bg-white p-8 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-bold">Send Us A Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill the form and we&apos;ll reply with next steps, timelines, and investment options.
              </p>
              {submitSuccess && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" className="mt-2" {...register('name')} />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2"
                      {...register('email')}
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      placeholder="Your brand or business"
                      className="mt-2"
                      {...register('companyName')}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service">Services Interested In *</Label>
                  <select
                    id="service"
                    className="mt-2 flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register('service')}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, budget, and timeline..."
                    className="mt-2 min-h-[140px]"
                    {...register('message')}
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-[32px] border border-white/70 bg-white p-8 shadow-xl shadow-secondary/10">
              <h2 className="text-2xl font-bold">Direct Contact</h2>
              <p className="mt-2 text-sm text-muted-foreground">Prefer a quick reply? Use any of these channels.</p>
              <div className="mt-8 space-y-5">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-start gap-4 rounded-2xl border border-muted/80 bg-muted/40 p-4">
                    <method.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} className="mt-1 block text-lg font-semibold text-foreground hover:text-primary">
                          {method.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold text-foreground">{method.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Business hours</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM GMT
                  <br />
                  Saturday: 10:00 AM - 2:00 PM GMT
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

