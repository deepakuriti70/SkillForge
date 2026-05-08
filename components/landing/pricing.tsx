"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for exploring career paths",
    price: "Free",
    period: "",
    features: [
      "1 career path simulation",
      "Basic AI mentor access",
      "5 mock interviews/month",
      "Community forum access",
      "Basic skill assessments",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious career changers",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited career simulations",
      "Advanced AI mentor (GPT-4)",
      "Unlimited mock interviews",
      "Priority support",
      "Portfolio builder",
      "Skill certifications",
      "Real project assignments",
      "1-on-1 mentor sessions",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Custom career paths",
      "Team analytics dashboard",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Bulk licensing",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Invest in Your <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Start for free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative flex flex-col overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "border-primary glow-primary scale-105 z-10" 
                  : "border-border/50 bg-card/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-0">
                  <Badge className="rounded-none rounded-bl-lg gradient-primary border-0">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? "gradient-primary border-0" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          14-day free trial on all paid plans. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
