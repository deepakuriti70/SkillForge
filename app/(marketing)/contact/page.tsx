"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Mail, MessageSquare, MapPin, Check } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Info */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a question or want to learn more? We&apos;d love to hear from you. 
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@skillforge.app</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-muted-foreground">Available 24/7 for support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-muted-foreground">San Francisco, CA (Remote-first)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="glass-card p-8 rounded-2xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button asChild>
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required className="mt-1.5" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <select 
                          id="subject" 
                          className="w-full mt-1.5 h-10 px-3 rounded-md border border-input bg-background text-sm"
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="press">Press & Media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          required 
                          className="mt-1.5 min-h-[120px]"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <Button type="submit" className="w-full gradient-primary border-0" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
