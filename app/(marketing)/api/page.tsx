"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Code2, Zap, Shield, BookOpen, ArrowRight } from "lucide-react"

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users/:id",
    description: "Retrieve user profile and progress",
  },
  {
    method: "GET",
    path: "/api/v1/tasks",
    description: "List all tasks for current user",
  },
  {
    method: "POST",
    path: "/api/v1/tasks/:id/submit",
    description: "Submit task completion",
  },
  {
    method: "GET",
    path: "/api/v1/careers",
    description: "List available career paths",
  },
  {
    method: "POST",
    path: "/api/v1/interviews/start",
    description: "Start an AI interview session",
  },
]

const sdks = [
  { name: "JavaScript/Node.js", version: "v2.1.0" },
  { name: "Python", version: "v1.8.0" },
  { name: "Ruby", version: "v1.2.0" },
  { name: "Go", version: "v0.9.0" },
]

export default function APIPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Code2 className="h-3 w-3 mr-1" />
              Developer API
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Build with <span className="text-gradient">SkillForge API</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Integrate career simulations into your applications with our RESTful API. 
              Full documentation, SDKs, and examples included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-primary border-0">
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup">Get API Key</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-sm text-muted-foreground">99.9% uptime SLA with global edge network</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure by Default</h3>
                <p className="text-sm text-muted-foreground">OAuth 2.0, API keys, and request signing</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Well Documented</h3>
                <p className="text-sm text-muted-foreground">Comprehensive guides and examples</p>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints Preview */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Popular Endpoints</h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="divide-y divide-border">
                {endpoints.map((endpoint) => (
                  <div key={endpoint.path} className="p-4 flex items-center gap-4">
                    <Badge 
                      variant="secondary" 
                      className={`font-mono text-xs w-16 justify-center ${
                        endpoint.method === "GET" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                      }`}
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono flex-1">{endpoint.path}</code>
                    <span className="text-sm text-muted-foreground hidden sm:block">{endpoint.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <Link href="/docs">
                  View All Endpoints <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Official SDKs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sdks.map((sdk) => (
                <div key={sdk.name} className="glass-card p-5 rounded-xl text-center">
                  <h3 className="font-semibold mb-1">{sdk.name}</h3>
                  <Badge variant="secondary" className="text-xs">{sdk.version}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Quick Start</h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="text-xs text-muted-foreground ml-2">example.js</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-muted-foreground">{`import SkillForge from '@skillforge/sdk';

const client = new SkillForge({
  apiKey: process.env.SKILLFORGE_API_KEY
});

// Get user progress
const user = await client.users.get('user_123');
console.log(user.level, user.xp);

// Start an AI interview
const interview = await client.interviews.start({
  careerPath: 'full-stack-developer',
  difficulty: 'intermediate'
});`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
