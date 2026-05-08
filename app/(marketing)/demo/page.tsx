"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Building2, Users, Zap } from "lucide-react"

const benefits = [
  "See the platform in action",
  "Get your questions answered",
  "Custom pricing for your team",
  "No commitment required",
]

export default function DemoPage() {
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Info */}
              <div>
                <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                  <Calendar className="h-3 w-3 mr-1" />
                  Book a Demo
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  See SkillForge <span className="text-gradient">in Action</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a personalized walkthrough of our AI-powered career simulation platform. 
                  See how SkillForge can transform your training and development.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                  <div className="text-center">
                    <Building2 className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">500+ Companies</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">50K+ Users</div>
                  </div>
                  <div className="text-center">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">15+ Paths</div>
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
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">
                      We&apos;ve received your request. Our team will reach out within 24 hours.
                    </p>
                    <Button asChild>
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-6">Request a Demo</h2>
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
                        <Label htmlFor="email">Work Email</Label>
                        <Input id="email" type="email" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="title">Job Title</Label>
                        <Input id="title" required className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="size">Team Size</Label>
                        <select 
                          id="size" 
                          className="w-full mt-1.5 h-10 px-3 rounded-md border border-input bg-background text-sm"
                          required
                        >
                          <option value="">Select team size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>
                      <Button type="submit" className="w-full gradient-primary border-0" size="lg">
                        Request Demo
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to our{" "}
                        <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>
                      </p>
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
