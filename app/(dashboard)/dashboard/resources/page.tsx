"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  BookOpen, Search, Play, FileText, Code2, 
  Video, ExternalLink, Clock, Star, Bookmark 
} from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "tutorials", label: "Tutorials" },
  { id: "articles", label: "Articles" },
  { id: "videos", label: "Videos" },
  { id: "courses", label: "Courses" },
  { id: "docs", label: "Documentation" },
]

const resources = [
  {
    id: "1",
    title: "React 19 Complete Guide",
    description: "Master the new features in React 19 including Server Components and Actions",
    type: "course",
    duration: "4 hours",
    level: "Intermediate",
    bookmarked: true,
    xp: 150,
  },
  {
    id: "2",
    title: "Building Scalable APIs with Node.js",
    description: "Best practices for designing and implementing production-ready APIs",
    type: "tutorial",
    duration: "45 min",
    level: "Advanced",
    bookmarked: false,
    xp: 75,
  },
  {
    id: "3",
    title: "TypeScript Deep Dive",
    description: "Advanced TypeScript patterns and techniques for large applications",
    type: "video",
    duration: "2 hours",
    level: "Advanced",
    bookmarked: true,
    xp: 100,
  },
  {
    id: "4",
    title: "System Design Interview Prep",
    description: "Common system design patterns and how to approach design interviews",
    type: "article",
    duration: "20 min read",
    level: "Intermediate",
    bookmarked: false,
    xp: 50,
  },
  {
    id: "5",
    title: "PostgreSQL Performance Optimization",
    description: "Query optimization, indexing strategies, and database tuning",
    type: "docs",
    duration: "30 min",
    level: "Advanced",
    bookmarked: false,
    xp: 60,
  },
  {
    id: "6",
    title: "CSS Grid Masterclass",
    description: "Build complex layouts with CSS Grid from basics to advanced",
    type: "video",
    duration: "1.5 hours",
    level: "Beginner",
    bookmarked: false,
    xp: 80,
  },
]

const typeIcons = {
  course: BookOpen,
  tutorial: Code2,
  video: Video,
  article: FileText,
  docs: FileText,
}

const typeColors = {
  course: "bg-purple-500/10 text-purple-500",
  tutorial: "bg-blue-500/10 text-blue-500",
  video: "bg-red-500/10 text-red-500",
  article: "bg-green-500/10 text-green-500",
  docs: "bg-yellow-500/10 text-yellow-500",
}

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Resources</h1>
          <p className="text-muted-foreground">Curated content to accelerate your learning</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-muted-foreground">Resources Completed</div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
            <Clock className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">18h</div>
            <div className="text-sm text-muted-foreground">Learning Time</div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
            <Star className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">1,250</div>
            <div className="text-sm text-muted-foreground">XP from Learning</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category, index) => (
          <Button
            key={category.id}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className={index === 0 ? "gradient-primary border-0" : ""}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Resource List */}
      <div className="grid md:grid-cols-2 gap-4">
        {resources.map((resource) => {
          const TypeIcon = typeIcons[resource.type as keyof typeof typeIcons]
          return (
            <div 
              key={resource.id} 
              className="glass-card p-5 rounded-xl hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  typeColors[resource.type as keyof typeof typeColors]
                }`}>
                  <TypeIcon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                      {resource.title}
                    </h3>
                    <button className="shrink-0">
                      <Bookmark className={`h-5 w-5 ${
                        resource.bookmarked ? "fill-primary text-primary" : "text-muted-foreground"
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {resource.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {resource.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {resource.duration}
                    </span>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary ml-auto">
                      +{resource.xp} XP
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 pt-4 border-t border-border/50">
                <Button size="sm" className="gradient-primary border-0">
                  {resource.type === "video" || resource.type === "course" ? (
                    <>
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Open
                    </>
                  )}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
