"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Zap,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  Code2,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Calendar,
  Star,
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "XP Earned",
    value: "2,450",
    change: "+340 this week",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Tasks Completed",
    value: "47",
    change: "+12 this week",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Current Streak",
    value: "14 days",
    change: "Personal best!",
    icon: Trophy,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Hours Logged",
    value: "86",
    change: "+18 this week",
    icon: Clock,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const currentTasks = [
  {
    id: 1,
    title: "Build REST API for Authentication",
    project: "TechVenture Backend",
    priority: "high",
    dueDate: "Today",
    progress: 65,
  },
  {
    id: 2,
    title: "Design User Dashboard Mockups",
    project: "UI Redesign Sprint",
    priority: "medium",
    dueDate: "Tomorrow",
    progress: 30,
  },
  {
    id: 3,
    title: "Write Unit Tests for Payment Module",
    project: "E-commerce Platform",
    priority: "low",
    dueDate: "In 3 days",
    progress: 0,
  },
]

const recentActivity = [
  {
    id: 1,
    type: "task_completed",
    title: "Completed code review for PR #42",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-success",
  },
  {
    id: 2,
    type: "achievement",
    title: "Earned 'API Master' badge",
    time: "5 hours ago",
    icon: Trophy,
    color: "text-warning",
  },
  {
    id: 3,
    type: "mentor",
    title: "AI Mentor feedback received",
    time: "Yesterday",
    icon: MessageSquare,
    color: "text-primary",
  },
  {
    id: 4,
    type: "project",
    title: "Joined 'E-commerce Platform' project",
    time: "2 days ago",
    icon: Briefcase,
    color: "text-accent",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Technical Interview Practice",
    time: "Today, 3:00 PM",
    type: "interview",
  },
  {
    id: 2,
    title: "Team Standup Meeting",
    time: "Tomorrow, 10:00 AM",
    type: "meeting",
  },
  {
    id: 3,
    title: "Code Review Session",
    time: "Friday, 2:00 PM",
    type: "review",
  },
]

export default function DashboardPage() {
  const { user } = useAuth()
  const levelProgress = ((user?.xp || 0) % 500) / 500 * 100

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome back, <span className="text-gradient">{user?.name?.split(" ")[0] || "Developer"}</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Here&apos;s what&apos;s happening in your career simulation today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Star className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium">Level {user?.level || 1}</span>
            <Progress value={levelProgress} className="w-20 h-2" />
          </div>
          <Button asChild className="gradient-primary border-0">
            <Link href="/dashboard/tasks">
              View All Tasks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
              <p className="mt-2 text-xs text-success">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Current Tasks */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Current Tasks
              </CardTitle>
              <CardDescription>Your active work items</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/tasks">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium truncate">{task.title}</h4>
                    <Badge
                      variant="outline"
                      className={
                        task.priority === "high"
                          ? "border-destructive/50 text-destructive"
                          : task.priority === "medium"
                          ? "border-warning/50 text-warning"
                          : "border-muted-foreground/50 text-muted-foreground"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{task.project}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {task.dueDate}
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <Progress value={task.progress} className="h-1.5 flex-1" />
                      <span className="text-xs text-muted-foreground">{task.progress}%</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
                <Link href="/dashboard/code">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="text-xs">Code Editor</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
                <Link href="/dashboard/mentor">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  <span className="text-xs">AI Mentor</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
                <Link href="/dashboard/interviews">
                  <Briefcase className="h-5 w-5 text-warning" />
                  <span className="text-xs">Interviews</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
                <Link href="/dashboard/leaderboard">
                  <Trophy className="h-5 w-5 text-success" />
                  <span className="text-xs">Leaderboard</span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Feed */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your latest actions and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary ${activity.color}`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
