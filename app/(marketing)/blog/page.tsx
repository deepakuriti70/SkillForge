"use client"

import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "The Future of Career Preparation: AI-Powered Simulations",
    excerpt: "How artificial intelligence is revolutionizing the way we prepare for new careers and job transitions.",
    category: "Industry Insights",
    date: "May 5, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "5 Signs You Are Ready for a Career Change",
    excerpt: "Feeling stuck? Here are the telltale signs that it might be time to explore new professional paths.",
    category: "Career Advice",
    date: "May 2, 2026",
    readTime: "5 min read",
  },
  {
    title: "How Sarah Landed Her Dream Job at Google",
    excerpt: "A SkillForge success story: from bootcamp graduate to senior developer in 6 months.",
    category: "Success Stories",
    date: "Apr 28, 2026",
    readTime: "6 min read",
  },
  {
    title: "Mastering Technical Interviews with AI Practice",
    excerpt: "Tips and strategies for using AI-powered interview practice to ace your next technical interview.",
    category: "Interview Tips",
    date: "Apr 24, 2026",
    readTime: "7 min read",
  },
  {
    title: "Building a Portfolio That Gets Noticed",
    excerpt: "Learn how to create a compelling portfolio that showcases your skills and attracts recruiters.",
    category: "Career Advice",
    date: "Apr 20, 2026",
    readTime: "6 min read",
  },
  {
    title: "The Rise of the T-Shaped Professional",
    excerpt: "Why having both depth and breadth in your skills is more important than ever in today's job market.",
    category: "Industry Insights",
    date: "Apr 16, 2026",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              The Forge <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights, tips, and stories to help you navigate your career journey.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12 border-b border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Link href="#" className="block glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group">
                <div className="aspect-[21/9] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{featuredPost.category}</Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link 
                  key={post.title}
                  href="#" 
                  className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 relative">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
