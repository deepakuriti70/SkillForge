"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, Shield, Users, BarChart3, 
  Headphones, Lock, Zap, Check 
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Team Management",
    description: "Manage unlimited users with role-based access controls and team hierarchies.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track team progress, identify skill gaps, and measure ROI with detailed reports.",
  },
  {
    icon: Shield,
    title: "SSO & Security",
    description: "Enterprise-grade security with SAML SSO, 2FA, and SOC 2 compliance.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your data stays yours. GDPR compliant with dedicated data isolation.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Dedicated account manager and 24/7 priority technical support.",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description: "Connect with your existing tools via API and custom integrations.",
  },
]

const useCases = [
  "Employee onboarding and training",
  "Upskilling existing workforce",
  "Hiring assessment and evaluation",
  "Leadership development programs",
  "Technical interview standardization",
  "Bootcamp and education partnerships",
]

const logos = [
  "Fortune 500 Tech Company",
  "Global Consulting Firm",
  "Leading University",
  "Fast-Growing Startup",
]

export default function EnterprisePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Building2 className="h-3 w-3 mr-1" />
              Enterprise
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SkillForge for <span className="text-gradient">Enterprise</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your workforce with AI-powered career simulations. 
              Scale training, reduce costs, and measure results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-primary border-0">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">60%</div>
                <div className="text-muted-foreground">Faster Onboarding</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">40%</div>
                <div className="text-muted-foreground">Training Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">3x</div>
                <div className="text-muted-foreground">Employee Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">94%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to train and develop your workforce at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card p-6 rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
              <p className="text-muted-foreground">
                How leading organizations use SkillForge
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-center gap-3 p-4 glass-card rounded-xl">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your training?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust SkillForge for workforce development.
            </p>
            <Button size="lg" asChild className="gradient-primary border-0">
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
